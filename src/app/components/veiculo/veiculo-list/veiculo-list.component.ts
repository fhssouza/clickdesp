import { Component } from '@angular/core';
import { Veiculo } from 'src/app/models/Veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent {

  veiculos: Veiculo[] = [];

  constructor(
    private veiculoService: VeiculoService
  ){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.veiculoService.findAll()
    .subscribe((response) => {
      this.veiculos = response;
      console.table(response)
    });
  }

}
