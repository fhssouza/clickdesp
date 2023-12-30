import { Component } from '@angular/core';
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

  categorias: Categoria[] = [];

  servico: Servico = {
    descricao:'',
    preco:0,
    categoria:0
  }

  constructor(
    private service: ServicoService,
    private router: Router,
    private categoriaService: CategoriaService
  ){}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.listar()
      .subscribe(categorias => this.categorias = categorias);
  }

  salvar(){
    this.service.adicionar(this.servico).subscribe(() => {
    this.router.navigate(['/listarservicos'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarservicos']);
  }
}
