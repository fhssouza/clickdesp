import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Credencial } from 'src/app/models/Credencial';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credencial = {
    email: '',
    senha: ''
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  submitted = false;
  error = '';


  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private toast: ToastrService
  ){}

  get f(){
    return this.loginForm.controls;
  }

  login(){
    this.submitted = true;

    if (this.loginForm.invalid){
      return;
    }

    this.authenticationService.login(this.loginForm.value as Credencial)
    .subscribe(response => {
      this.router.navigate(['/home'])
    }, () => {
      this.toast.error('Usuário e/ou senha inválidos');
    })
  }

  // logar() {
  //   this.service.authenticate(this.creds).subscribe(resposta => {
  //     this.service.successfulLogin(resposta.headers.get('Authorization').substring(7));
  //     this.router.navigate([''])
  //   }, () => {
  //     this.toast.error('Usuário e/ou senha inválidos');
  //   })
  // }

}
