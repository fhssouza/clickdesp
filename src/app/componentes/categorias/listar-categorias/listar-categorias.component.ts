import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  listaCategorias=[
    {id: '01', nome: 'Habilitação'},
    {id: '02', nome: 'Veiculos'},
    {id: '03', nome: 'Outros'},
  ]

  constructor(){}

  ngOnInit(): void {

  }

}
