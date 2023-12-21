import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Categoria } from './../../../models/Categoria';
import { CategoriaService } from './../../../services/categoria.service';

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
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((categoria) => {
      this.categoria = categoria;
    })
  }

  excluirCategoria(){
    if (this.categoria.id){
      this.service.excluir(this.categoria.id).subscribe((categoria) => {
        this.router.navigate(['/listarcategorias']);
      })
    }
  }

  cancelar(){
    this.router.navigate(['/listarcategorias']);
  }


}
