import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Endereco } from 'src/app/models/Endereco';
import { ProprietarioService } from 'src/app/services/proprietario.service';

@Component({
  selector: 'app-proprietario-address',
  templateUrl: './proprietario-address.component.html',
  styleUrls: ['./proprietario-address.component.css']
})
export class ProprietarioAddressComponent {

  proprietarioId: number;

  endereco: Endereco = {
    logradouro: '',
    cep: '',
    complemento: '',
    localidade: '',
    bairro: '',
    uf: '',
    ddd: '',
    numero: '',
    // principal: true,
  }

  formulario = new FormGroup({
    logradouro: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    complemento: new FormControl('', [Validators.required]),
    localidade: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
    ddd: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    // principal: new FormControl([Validators.required]),
  });

  constructor(
    private proprietarioService: ProprietarioService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService
  ){}

  ngOnInit(): void {
    this.proprietarioId = this.route.snapshot.params.id;
    this.findByIdProprietarioEndereco();
  }

  findByIdProprietarioEndereco(): void {
    this.proprietarioService.findByIdProprietarioEndereco(this.proprietarioId).subscribe(resposta => {
      this.endereco = resposta;
    }, ex => {
      this.toast.error(ex.error.error);
    })
  }

  addAddress(): void {
    this.proprietarioService.addAddress(this.proprietarioId, this.formulario.value as Endereco).subscribe(() => {
      this.toast.success('Endereço cadastrado com sucesso', 'Cadastrar');
      this.router.navigate(['proprietarios'])
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
    this.router.navigate(['proprietarios']);
  }

}
