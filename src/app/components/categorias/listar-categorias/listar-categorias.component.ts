import { Component, OnInit } from '@angular/core';

import { Categoria } from './../../../models/Categoria';
import { CategoriaService } from './../../../services/categoria.service';


@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  categorias: Categoria[]=[];

  constructor(private service: CategoriaService){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

}
