import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/models/Categoria';
import { Servico } from 'src/app/models/Servico';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ServicoService } from 'src/app/services/servico.service';

@Component({
  selector: 'app-adicionar-servico',
  templateUrl: './adicionar-servico.component.html',
  styleUrls: ['./adicionar-servico.component.css']
})
export class AdicionarServicoComponent {

  categorias: Categoria[] = [];

  servico: Servico = {
    descricao:'',
    preco:'',
    categoria:''
  }

  formulario = new FormGroup({
    descricao: new FormControl('', Validators.required),
    preco: new FormControl('', Validators.required),
    categoria: new FormControl('', [Validators.required]),
  });

  constructor(
    private servicoService: ServicoService,
    private router: Router,
    private categoriaService: CategoriaService,
    private toast: ToastrService
  ){}

  ngOnInit(): void {
    this.findAllCategorias();
  }

  findAllCategorias(): void {
    this.categoriaService.listar()
      .subscribe(categorias => this.categorias = categorias);
  }

  create(): void {
    this.servicoService.create(this.formulario.value as Servico).subscribe(() => {
      this.toast.success('Serviço cadastrado com sucesso', 'Servico');
      this.router.navigate(['servicos'])
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
    this.router.navigate(['servicos']);
  }

}
