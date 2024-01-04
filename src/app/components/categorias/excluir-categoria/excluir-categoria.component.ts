import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Categoria } from './../../../models/Categoria';
import { CategoriaService } from './../../../services/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent implements OnInit {

  categoria: Categoria = {
    descricao:''
  }

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

  delete(): void {
    this.categoriaService.delete(this.categoria.id).subscribe(() => {
      this.toastService.success('Categoria deletada com sucesso', 'Deletar');
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

  cancelar(){
    this.router.navigate(['/categorias']);
  }


}
