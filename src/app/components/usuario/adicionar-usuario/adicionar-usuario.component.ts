import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.component.html',
  styleUrls: ['./adicionar-usuario.component.css']
})
export class AdicionarUsuarioComponent {

  submitted = false;
  error = '';

  usuario: Usuario = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  }

  usuarioForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)

  });

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ){}

  get f(){
    return this.usuarioForm.controls;
  }

  create(){
    this.submitted = true;

    if (this.usuarioForm.invalid){
      return;
    }

    this.usuarioService.create(this.usuarioForm.value as Usuario)
    .subscribe(response => {
      this.router.navigate(['/login'])
    },
    error => {
      this.error = error;
      this.submitted = true;
    });
  }

}
