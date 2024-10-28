import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Veiculo } from 'src/app/models/Veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-delete',
  templateUrl: './veiculo-delete.component.html',
  styleUrls: ['./veiculo-delete.component.css']
})
export class VeiculoDeleteComponent {

  veiculo: Veiculo = {
    placa: '',
    marca: '',
    modelo: '',
    cor: '',
    combustivel: '',
    procedencia: '',
    ano: 0,
    crv: '',
    dataCrv: '',
    chassi: '',
    alienacaoFinduciaria: '',
    arrendamento: '',
    renavam: '',
    proprietario: '',
  }

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
  ){}

  ngOnInit(): void {
    this.veiculo.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.veiculoService.findById(this.veiculo.id).subscribe(resposta => {
      this.veiculo = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  delete(): void {
    this.veiculoService.delete(this.veiculo.id).subscribe(() => {
      this.toastService.success('Veiculo deletado com sucesso', 'Deletar');
      this.router.navigate(['veiculos'])
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach((element: { message: string | undefined; }) => {
          this.toastService.error(element.message);
        });
      } else {
        this.toastService.error(ex.error.message);
      }
    })
  }

  cancelar(){
    this.router.navigate(['veiculos']);
  }
}
