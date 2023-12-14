import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Categoria } from './../../../models/Categoria';
import { CategoriaService } from './../../../services/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  categoria: Categoria = {
    descricao: ''
  }

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
        this.service.buscarPorId(parseInt(id!)).subscribe((categoria) => {
            this.categoria = categoria;
    })

  }

  editarCategoria(){
    this.service.editar(this.categoria).subscribe(() => {
      this.router.navigate(['/listarcategorias'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarcategorias'])
  }

}
