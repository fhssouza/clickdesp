import {Component, OnInit} from '@angular/core';
import {Licenciamento} from "../../../models/Licenciamento";
import {LicenciamentoService} from "../../../services/licenciamento.service";

@Component({
  selector: 'app-licenciamento-list',
  templateUrl: './licenciamento-list.component.html',
  styleUrls: ['./licenciamento-list.component.css']
})
export class LicenciamentoListComponent implements OnInit {

  licenciamentos: Licenciamento[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private service: LicenciamentoService){}

  ngOnInit(): void {
      this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((licenciamentos) => {
      this.licenciamentos = licenciamentos;
    });
  }

}
