import { OrdemservicoService } from './../../../services/ordemservico.service';
import { Component } from '@angular/core';
import { OrdemServico } from 'src/app/models/OrdemServico';

@Component({
  selector: 'app-ordemservico-list',
  templateUrl: './ordemservico-list.component.html',
  styleUrls: ['./ordemservico-list.component.css']
})
export class OrdemservicoListComponent {

  ordensservicos: OrdemServico[] = [];

  constructor(
    private ordemservicoService: OrdemservicoService
  ){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.ordemservicoService.findAll()
    .subscribe((response) => {
      this.ordensservicos = response;
      console.table(response)
    });
  }
}
