import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proprietario } from 'src/app/models/Proprietario';
import { Veiculo } from 'src/app/models/Veiculo';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-update',
  templateUrl: './veiculo-update.component.html',
  styleUrls: ['./veiculo-update.component.css']
})
export class VeiculoUpdateComponent {

  proprietarios: Proprietario[] = [];

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

  formulario = new FormGroup({
    placa: new FormControl('', Validators.required),
    marca: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    cor: new FormControl('', Validators.required),
    combustivel: new FormControl('', Validators.required),
    procedencia: new FormControl('', Validators.required),
    ano: new FormControl(null, Validators.required),
    crv: new FormControl(null, Validators.required),
    dataCrv: new FormControl('', Validators.required),
    chassi: new FormControl('', Validators.required),
    alienacaoFinduciaria: new FormControl('', Validators.required),
    arrendamento: new FormControl('', Validators.required),
    renavam: new FormControl('', Validators.required),
    proprietario: new FormControl('', Validators.required),
  })

  constructor(
    private veiculoService: VeiculoService,
    private proprietarioService: ProprietarioService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService
  ){}

  ngOnInit(): void {
    this.veiculo.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllProprietarios();
  }

  findById(): void {
    this.veiculoService.findById(this.veiculo.id).subscribe(resposta => {
      this.veiculo = resposta;
    }, ex => {
      this.toast.error(ex.error.error);
    })
  }

  findAllProprietarios(): void {
    this.proprietarioService.findAll()
      .subscribe(respose => this.proprietarios = respose);
  }

  update(): void {
    this.veiculoService.update(this.veiculo).subscribe(() => {
      this.toast.success('Veiculo atualizado com sucesso', 'Atualizar');
      this.router.navigate(['veiculos']);
    }, ex => {
      if(ex.error.errors) {
        ex.error.errors.forEach((element: { message: string | undefined; }) => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  validaCampos(): boolean {
    return this.formulario.valid;
  }

  cancelar(){
    this.router.navigate(['veiculos']);
  }


}
