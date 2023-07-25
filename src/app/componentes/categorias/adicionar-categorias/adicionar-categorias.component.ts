import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Categoria';
import { CategoriaService } from '../categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-categorias',
  templateUrl: './adicionar-categorias.component.html',
  styleUrls: ['./adicionar-categorias.component.css']
})
export class AdicionarCategoriasComponent implements OnInit {

  categoria: Categoria = {
    descricao: '',
  }

  constructor(
    private service: CategoriaService,
    private router: Router
  ){}

  ngOnInit(): void {

  }

  adicionarCategoria(){
    alert("Nova Categoria criada!");
    this.service.adicionar(this.categoria).subscribe(() => {
      this.router.navigate(['/listarcategorias'])
    })
  }

  cancelar(){
    alert("Ação cancelada");
    this.router.navigate(['/listarcategorias']);
  }

}
