import { Component } from '@angular/core';
import { Proprietario } from 'src/app/models/Proprietario';
import { ProprietarioService } from 'src/app/services/proprietario.service';

@Component({
  selector: 'app-proprietario-list',
  templateUrl: './proprietario-list.component.html',
  styleUrls: ['./proprietario-list.component.css']
})
export class ProprietarioListComponent {

  proprietarios: Proprietario[] = [];

  constructor(
    private proprietarioService: ProprietarioService
  ){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.proprietarioService.findAll()
    .subscribe((response) => {
      this.proprietarios = response;
      console.table(response)
    });
  }

}
