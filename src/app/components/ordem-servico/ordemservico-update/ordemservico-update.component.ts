import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Itens } from 'src/app/models/Itens';
import { OrdemServico } from 'src/app/models/OrdemServico';
import { Servico } from 'src/app/models/Servico';
import { Veiculo } from 'src/app/models/Veiculo';
import { OrdemservicoService } from 'src/app/services/ordemservico.service';
import { ServicoService } from 'src/app/services/servico.service';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-ordemservico-update',
  templateUrl: './ordemservico-update.component.html',
  styleUrls: ['./ordemservico-update.component.css']
})
export class OrdemservicoUpdateComponent {

  orderId: number;

  listitens: Itens[] = [];

  formulario: FormGroup;

  veiculos: Veiculo[] = [];

  servicos: Servico[] = [];

  ordemServico: OrdemServico = {
    id: '',
    veiculo: '',
    tipoServico: '',
    observacao: '',
    itens: []
  }

  constructor(
    private servicoService: ServicoService,
    private veiculoService: VeiculoService,
    private ordemServicoService: OrdemservicoService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private fb: FormBuilder,
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params.id;
    this.findAllVeiculos();
    this.findAllServicos();
    this.inicializarFormulario();
    this.carregarFormularioFindById()
  }

  findAllVeiculos(): void {
    this.veiculoService.findAll()
      .subscribe(respose => this.veiculos = respose);
  }

  findAllServicos(): void {
    this.servicoService.findAll()
      .subscribe(respose => this.servicos = respose);
  }

  inicializarFormulario() {
    this.formulario = this.fb.group({
      id: [''],
      veiculo: ['', Validators.required],
      tipoServico: ['', Validators.required],
      observacao: [''],
      itens: this.fb.array([])
    });
  }

  carregarFormularioFindById(): void {

    this.ordemServicoService.findById(this.orderId).subscribe(ordemServico => {

      this.formulario.patchValue({
        id: ordemServico.id,
        veiculo: ordemServico.veiculo,
        tipoServico: ordemServico.tipoServico,
        observacao: ordemServico.observacao,
      });

      const itensFormArray = this.formulario.get('itens') as FormArray;
      itensFormArray.clear();

      ordemServico.itens.forEach(item => {
        itensFormArray.push(this.fb.group({
          quantidade: item.quantidade,
          servico: item.servico.id,
          preco: item.preco,
          desconto: item.desconto,
        }));
      });
    });
  }

  get itensFormArray(): FormArray {
    return this.formulario.get('itens') as FormArray;
  }

  addItens(): void {
    const itensArray = this.formulario.get('itens') as FormArray;
    itensArray.push(this.criarItemFormGroup());
  }

  criarItemFormGroup(): FormGroup {
    return this.fb.group({
      quantidade: [1, [Validators.required, Validators.min(1)]],
      servico: ['', Validators.required],
      desconto: [null],
      preco: [''],
    });
  }

  removerItem(index: number) {
    const itensArray = this.formulario.get('itens') as FormArray;
    itensArray.removeAt(index);
  }

  atualizarPreco(index: number) {
    const servicoId = this.itensFormArray.at(index).get('servico')?.value;
    const servicoSelecionado = this.servicos.find((servico) => servico.id === servicoId);

    if (servicoSelecionado) {
      const precoFormatado = this.currencyPipe.transform(servicoSelecionado.preco, 'BRL', 'symbol', '1.2-2');
      this.itensFormArray.at(index).get('preco')?.setValue(precoFormatado);
    } else {
      this.itensFormArray.at(index).get('preco')?.setValue('');
    }
  }

  update(): void {
    this.ordemServicoService.update(this.formulario.value as OrdemServico).subscribe(() => {
      this.toast.success('Ordem de Serviço atualizada com sucesso', 'Atualizar');
      this.router.navigate(['ordens-servicos'])
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.forEach((element: { message: string | undefined; }) => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  validaCampos(): boolean {
    return this.formulario.valid;
  }

  cancelar() {
    this.router.navigate(['ordens-servicos']);
  }

}
