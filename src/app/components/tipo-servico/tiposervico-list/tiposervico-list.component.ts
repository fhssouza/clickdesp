import { Component } from '@angular/core';
import { TipoServico } from 'src/app/models/TipoServico';
import { TiposervicoService } from 'src/app/services/tiposervico.service';

@Component({
  selector: 'app-tiposervico-list',
  templateUrl: './tiposervico-list.component.html',
  styleUrls: ['./tiposervico-list.component.css']
})
export class TiposervicoListComponent {

  tiposServicos: TipoServico[]=[];

  constructor(private service: TiposervicoService){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((tiposServicos) => {
      this.tiposServicos = tiposServicos;
    });
  }

}
