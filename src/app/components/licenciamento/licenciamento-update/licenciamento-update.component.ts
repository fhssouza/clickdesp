import { Component } from '@angular/core';
import {Licenciamento} from "../../../models/Licenciamento";
import {LicenciamentoService} from "../../../services/licenciamento.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-licenciamento-update',
  templateUrl: './licenciamento-update.component.html',
  styleUrls: ['./licenciamento-update.component.css']
})
export class LicenciamentoUpdateComponent {

  licenciamento: Licenciamento = {
    finaPlaca: '',
    dataVencimento: '',
    anoReferencia: 0
  }

  constructor(
    private licenciamentoService: LicenciamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService
  ) { }

  formulario = new FormGroup({
    finaPlaca: new FormControl('', Validators.required),
    dataVencimento: new FormControl('', Validators.required),
    anoReferencia: new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
    this.licenciamento.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
      this.licenciamentoService.findById(this.licenciamento.id).subscribe({
        next: resposta => {
          this.licenciamento = resposta;
          this.formulario.patchValue({
            finaPlaca: resposta.finaPlaca,
            dataVencimento: this.formatarData(resposta.dataVencimento),
            anoReferencia: resposta.anoReferencia
          });
        },
        error: ex => {
          this.toast.error(ex.error.error);
        }
      });
  }

  update(): void {
    if (!this.validaCampos()) {
      this.toast.error('Por favor, preencha todos os campos obrigatórios.', 'Atenção');
      return;
    }
    const formValues = this.formulario.value;

    const licenciamentoParaAtualizar: Licenciamento = {
      id: this.licenciamento.id,
      finaPlaca: formValues.finaPlaca,
      dataVencimento: formValues.dataVencimento,
      anoReferencia: formValues.anoReferencia
    };

    this.licenciamentoService.update(licenciamentoParaAtualizar).subscribe({
      next: () => {
        this.toast.success('Licenciamento atualizado com sucesso', 'Atualizar');
        this.router.navigate(['licenciamentos']);
      },
      error: ex => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element: { message: string | undefined; }) => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(ex.error.message);
        }
      }
    });
  }

  validaCampos(): boolean {
    return this.formulario.valid;
  }

  cancelar(){
    this.router.navigate(['licenciamentos']);
  }

 formatarData(data: string): string {
    const [dia, mes, ano] = data.split('/');
    return `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
 }

}
