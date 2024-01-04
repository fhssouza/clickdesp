import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Categoria } from './../../../models/Categoria';
import { CategoriaService } from './../../../services/categoria.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adicionar-categorias',
  templateUrl: './adicionar-categorias.component.html',
  styleUrls: ['./adicionar-categorias.component.css']
})
export class AdicionarCategoriasComponent{

  categoria: Categoria = {
    descricao: '',
  }

  formulario = new FormGroup({
    descricao: new FormControl('', Validators.required)
  })

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private toastService: ToastrService
  ){}

  create(): void {
    this.categoriaService.create(this.formulario.value as Categoria).subscribe(() => {
      this.toastService.success('Categoria cadastrada com sucesso', 'Cadastrar');
      this.router.navigate(['categorias'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach((element: { message: string | undefined; }) => {
          this.toastService.error(element.message);
        });
      } else {
        this.toastService.error(ex.error.message);
      }
    })
  }

  validaCampos(): boolean {
    return this.formulario.valid;
  }

  cancelar(){
    this.router.navigate(['categorias']);
  }

}
