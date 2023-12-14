import { ServicoService } from 'src/app/services/servico.service';
import { Servico } from './../../../models/Servico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-servicos',
  templateUrl: './listar-servicos.component.html',
  styleUrls: ['./listar-servicos.component.css']
})
export class ListarServicosComponent implements OnInit {

  listaServicos: Servico[]=[];

  constructor(private service: ServicoService){}

  ngOnInit(): void {
    this.listarServicos();
  }

  listarServicos(): void {
    this.service.listar()
    .subscribe(listarServicos => {
      console.table(listarServicos);
      this.listaServicos = listarServicos;
    });
  }

}
