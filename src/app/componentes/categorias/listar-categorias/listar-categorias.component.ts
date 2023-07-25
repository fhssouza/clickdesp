import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  listaCategorias: Categoria[]=[];

  constructor(private service: CategoriaService){}

  ngOnInit(): void {
    this.service.listar().subscribe((listaCategorias) => {
      this.listaCategorias = listaCategorias;
    });
  }

}
