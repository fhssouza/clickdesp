import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxViacepService } from '@brunoc/ngx-viacep';
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

  enderecos: Endereco[] = [];

  endereco: Endereco = {
    logradouro: '',
    cep: '',
    complemento: '',
    localidade: '',
    bairro: '',
    uf: '',
    numero: '',
    enderecos: []
  }

  formulario = new FormGroup({
    logradouro: new FormControl('', Validators.required),
    cep: new FormControl('', Validators.required),
    complemento: new FormControl('', [Validators.required]),
    localidade: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    uf: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
  });

  constructor(
    private proprietarioService: ProprietarioService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private viacep: NgxViacepService
  ){}

  ngOnInit(): void {
    this.proprietarioId = this.route.snapshot.params.id;
    this.findByIdProprietarioEndereco();
    this.buscarEnderecoPorCep();
  }

  findByIdProprietarioEndereco(): void {
    this.proprietarioService.findByIdProprietarioEndereco(this.proprietarioId).subscribe(resposta => {
      this.endereco = resposta;
      this.enderecos = resposta.enderecos
    }, ex => {
      this.toast.error(ex.error.error);
    })
  }

  buscarEnderecoPorCep(): void {
    this.formulario.get('cep')?.valueChanges.subscribe(cep => {
      if (cep && cep.length === 8) {
        this.viacep.buscarPorCep(cep).subscribe((endereco) => {
          this.formulario.patchValue({
            logradouro: endereco.logradouro,
            complemento: endereco.complemento,
            localidade: endereco.localidade,
            bairro: endereco.bairro,
            uf: endereco.uf,
          });
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
    });
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
