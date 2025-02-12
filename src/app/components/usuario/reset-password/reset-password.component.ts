import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  submitted = false;
  error = '';
  success = '';

  resetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    token: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required])
  });

  constructor(
    private usuarioService: UsuarioService,
    private toast: ToastrService,
    private router: Router,
  ) {}

  get f() {
    return this.resetPasswordForm.controls;
  }

  resetPassword() {
    this.submitted = true;

    if (this.resetPasswordForm.invalid) {
      return;
    }

    const { email, token, newPassword } = this.resetPasswordForm.value;

    this.usuarioService.resetPassword(email, token, newPassword)
      .subscribe(() => {
        this.toast.success('Senha alterada com Sucesso', 'Senha');
        this.router.navigate(['login']);
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
}
