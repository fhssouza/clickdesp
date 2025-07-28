import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LicenciamentoService} from "../../../services/licenciamento.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {Veiculo} from "../../../models/Veiculo";
import {Licenciamento} from "../../../models/Licenciamento";

@Component({
  selector: 'app-licenciamento-create',
  templateUrl: './licenciamento-create.component.html',
  styleUrls: ['./licenciamento-create.component.css']
})
export class LicenciamentoCreateComponent {

  licenciamento: Licenciamento = {
    finaPlaca: '',
    dataVencimento: '',
    anoReferencia: 0
  }

  constructor(
    private licenciamentoService: LicenciamentoService,
    private router: Router,
    private toast: ToastrService
  ) { }

  formulario = new FormGroup({
    finaPlaca: new FormControl('', Validators.required),
    dataVencimento: new FormControl('', Validators.required),
    anoReferencia: new FormControl(null, Validators.required)
  })

  create(): void {
    this.licenciamentoService.create(this.formulario.value as Licenciamento).subscribe({
      next: () => {
        this.toast.success('Licenciamento cadastrado com sucesso!', 'Cadastro');
        this.router.navigate(['licenciamentos']);
      },
      error: err => {
        this.toast.error(err.error.error, 'Erro ao cadastrar licenciamento');
      }
    });
  }

  validaCampos(): boolean {
    return this.formulario.valid;
  }

  cancelar(){
    this.router.navigate(['licenciamentos']);
  }

}
