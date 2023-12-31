import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  submitted = false;
  error = '';

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
    private service: ServicoService,
    private router: Router,
    private categoriaService: CategoriaService
  ){}

  get f(){
    return this.formulario.controls;
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.listar()
      .subscribe(categorias => this.categorias = categorias);
  }

  create(){
    this.submitted = true;

    if (this.formulario.invalid){
      return;
    }

    this.service.create(this.formulario.value as Servico)
    .subscribe(response => {
    this.router.navigate(['/listarservicos'])
    },
    error => {
      this.error = error;
      this.submitted = true;
    });
  }

  cancelar(){
    this.router.navigate(['/listarservicos']);
  }
}
