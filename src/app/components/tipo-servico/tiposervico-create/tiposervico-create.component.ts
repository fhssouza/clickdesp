import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TipoServico } from 'src/app/models/TipoServico';
import { TiposervicoService } from 'src/app/services/tiposervico.service';

@Component({
  selector: 'app-tiposervico-create',
  templateUrl: './tiposervico-create.component.html',
  styleUrls: ['./tiposervico-create.component.css']
})
export class TiposervicoCreateComponent {

  tipoServico: TipoServico = {
    descricao: '',
  }

  formulario = new FormGroup({
    descricao: new FormControl('', Validators.required)
  })

  constructor(
    private tipoServicoService: TiposervicoService,
    private router: Router,
    private toastService: ToastrService
  ){}

  create(): void {
    this.tipoServicoService.create(this.formulario.value as TipoServico).subscribe(() => {
      this.toastService.success('Tipo Servico cadastrado com sucesso', 'Cadastrar');
      this.router.navigate(['tipos-servicos'])
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

  validaCampos(): boolean {
    return this.formulario.valid;
  }

  cancelar(){
    this.router.navigate(['tipos-servicos']);
  }
}
