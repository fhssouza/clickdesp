import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proprietario } from 'src/app/models/Proprietario';
import { Veiculo } from 'src/app/models/Veiculo';
import { ProprietarioService } from 'src/app/services/proprietario.service';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent {

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
    crv: new FormControl('', Validators.required),
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
    private router: Router,
    private toast: ToastrService
  ){}

  ngOnInit(): void {
    this.findAllProprietarios();
  }

  findAllProprietarios(): void {
    this.proprietarioService.findAll()
      .subscribe(respose => this.proprietarios = respose);
  }

  create(): void {
    this.veiculoService.create(this.formulario.value as Veiculo).subscribe(() => {
      this.toast.success('Veiculo cadastrado com sucesso', 'Cadastrar');
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
