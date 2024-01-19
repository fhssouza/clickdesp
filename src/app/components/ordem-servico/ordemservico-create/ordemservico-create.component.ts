import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrdemServico } from 'src/app/models/OrdemServico';
import { Servico } from 'src/app/models/Servico';
import { Veiculo } from 'src/app/models/Veiculo';
import { OrdemservicoService } from 'src/app/services/ordemservico.service';
import { ServicoService } from 'src/app/services/servico.service';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-ordemservico-create',
  templateUrl: './ordemservico-create.component.html',
  styleUrls: ['./ordemservico-create.component.css']
})
export class OrdemservicoCreateComponent {

  formulario: FormGroup;

  veiculos: Veiculo[] = [];

  servicos: Servico[] = [];

  ordemServico: OrdemServico = {
    veiculo: '',
    tipoServico: '',
    observacao: '',
    itens: {
      quantidade: 1,
      servico: '',
      desconto: null,
      preco: ''
      }
    }

  constructor(
    private servicoService: ServicoService,
    private veiculoService: VeiculoService,
    private ordemServicoService: OrdemservicoService,
    private router: Router,
    private toast: ToastrService,
    private fb: FormBuilder,
    private currencyPipe: CurrencyPipe
  ){}

  ngOnInit(): void {
    this.findAllVeiculos();
    this.findAllServicos();
    this.inicializarFormulario();
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
      veiculo: ['', Validators.required],
      tipoServico: ['', Validators.required],
      observacao: [''],
      itens: this.fb.array([])
    });
  }

  get itens() {
    return this.formulario.get('itens') as FormArray;
  }

  addItens() {
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
    const servicoId = this.itens.at(index).get('servico')?.value;
    const servicoSelecionado = this.servicos.find((servico) => servico.id === servicoId);

    if (servicoSelecionado) {
      const precoFormatado = this.currencyPipe.transform(servicoSelecionado.preco, 'BRL', 'symbol', '1.2-2');
      this.itens.at(index).get('preco')?.setValue(precoFormatado);
    } else {
      this.itens.at(index).get('preco')?.setValue('');
    }
  }

  create(): void {
    this.ordemServicoService.create(this.formulario.value as OrdemServico).subscribe(() => {
      this.toast.success('Ordem de Serviço cadastrada com sucesso', 'Cadastrar');
      this.router.navigate(['ordens-servicos']);
    }, ex => {
      if(ex.error.errors) {
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

  cancelar(){
    this.router.navigate(['ordens-servicos']);
  }

}
