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
import { TiposervicoService } from 'src/app/services/tiposervico.service';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-ordemservico-update',
  templateUrl: './ordemservico-update.component.html',
  styleUrls: ['./ordemservico-update.component.css']
})
export class OrdemservicoUpdateComponent {

  veiculoId: number;

  tipoServicoId: number;

  orderId: number;

  listitens: Itens[] = [];

  formulario: FormGroup;

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
    private tipoServicoService: TiposervicoService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private fb: FormBuilder,
    private currencyPipe: CurrencyPipe
  ) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params.id;
    this.findAllServicos();
    this.inicializarFormulario();
    this.carregarFormularioFindById()
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

      this.veiculoService.getVeiculoIdByPlaca(ordemServico.veiculoPlaca)
        .subscribe(veiculoId => {
          this.veiculoId = veiculoId;
        });

      this.tipoServicoService.getTipoServicoIdByDescricao(ordemServico.tipoServico)
        .subscribe(tipoServicoId => {
          this.tipoServicoId = tipoServicoId;
        });


      this.formulario.patchValue({
        id: ordemServico.id,
        veiculo: ordemServico.veiculoPlaca,
        tipoServico: ordemServico.tipoServico,
        observacao: ordemServico.observacao,
      });

      const itensFormArray = this.formulario.get('itens') as FormArray;
      itensFormArray.clear();

      ordemServico.itens.forEach(item => {
        let precoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco);
        itensFormArray.push(this.fb.group({
          quantidade: item.quantidade,
          servico: item.servico.id,
          preco: precoFormatado,
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
    const ordemServicoAtualizada: OrdemServico = {
      id: this.formulario.value.id,
      veiculo: this.veiculoId,
      tipoServico: this.tipoServicoId,
      observacao: this.formulario.value.observacao,
      itens: this.formulario.value.itens,
    };

    this.ordemServicoService.update(ordemServicoAtualizada).subscribe(() => {
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
