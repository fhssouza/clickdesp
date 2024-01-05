import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proprietario } from 'src/app/models/Proprietario';
import { ProprietarioService } from 'src/app/services/proprietario.service';

@Component({
  selector: 'app-proprietario-create',
  templateUrl: './proprietario-create.component.html',
  styleUrls: ['./proprietario-create.component.css']
})
export class ProprietarioCreateComponent {

  proprietario: Proprietario = {
    cpfOuCnpj: '',
    email: '',
    habilitacao: '',
    identidade: '',
    nome: '',
    responsavel: '',
    telefone: '',
    tipoPessoa: ''
  }

  formulario = new FormGroup({
    cpfOuCnpj: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    habilitacao: new FormControl('', Validators.required),
    identidade: new FormControl('', Validators.required),
    nome: new FormControl('', Validators.required),
    responsavel: new FormControl('', Validators.required),
    telefone: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]),
    tipoPessoa: new FormControl('', Validators.required),
  })

  constructor(
    private proprietarioService: ProprietarioService,
    private router: Router,
    private toast: ToastrService
  ){}

  create(): void {
    this.proprietarioService.create(this.formulario.value as Proprietario).subscribe(() => {
      this.toast.success('Proprietário cadastrado com sucesso', 'Cadastrar');
      this.router.navigate(['proprietarios']);
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
