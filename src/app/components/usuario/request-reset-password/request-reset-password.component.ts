import { Component } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { UsuarioService } from 'src/app/services/usuario.service';
import {ToastrService} from "ngx-toastr";

  @Component({
    selector: 'app-request-reset-password',
    templateUrl: './request-reset-password.component.html',
    styleUrls: ['./request-reset-password.component.css']
  })
  export class RequestResetPasswordComponent {

    submitted = false;
    error = '';
    success = '';

    resetPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });

    constructor(
      private usuarioService: UsuarioService,
      private toast: ToastrService
    ) {}

    get f() {
      return this.resetPasswordForm.controls;
    }

    requestReset() {
      this.submitted = true;

      if (this.resetPasswordForm.invalid) {
        return;
      }

      this.usuarioService.requestResetPassword(this.resetPasswordForm.value.email)
        .subscribe(() => {
          this.toast.success('Email enviado com sucesso', 'Token');
          // this.router.navigate(['proprietarios']);
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
