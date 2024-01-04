import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Categoria } from './../../../models/Categoria';
import { CategoriaService } from './../../../services/categoria.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  categoria: Categoria = {
    descricao: ''
  }

  formulario = new FormGroup({
    descricao: new FormControl('', Validators.required)
  })

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
  ){}

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.categoriaService.findById(this.categoria.id).subscribe(resposta => {
      this.categoria = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  update(): void {
    this.categoriaService.update(this.categoria).subscribe(() => {
      this.toastService.success('Categoria atualizada com sucesso', 'Atualizar');
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
    this.router.navigate(['categorias'])
  }

}
