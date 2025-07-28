import { Component } from '@angular/core';
import {Licenciamento} from "../../../models/Licenciamento";
import {LicenciamentoService} from "../../../services/licenciamento.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-licenciamento-delete',
  templateUrl: './licenciamento-delete.component.html',
  styleUrls: ['./licenciamento-delete.component.css']
})
export class LicenciamentoDeleteComponent {

  licenciamento: Licenciamento = {
    id: '',
    finaPlaca: '',
    dataVencimento: '',
    anoReferencia: 0
  }

  constructor(
    private service: LicenciamentoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.licenciamento.id = id;
      this.findById();
    } else {
      this.toast.error('ID do licenciamento não encontrado na URL.', 'Erro');
      this.router.navigate(['/licenciamentos']);
    }
  }

  findById(): void {
    this.service.findById(this.licenciamento.id).subscribe({
      next: (resposta) => {
        this.licenciamento = resposta;
      },
      error: (ex) => {
        this.toast.error(ex.error.error || 'Erro ao buscar licenciamento.');
        this.router.navigate(['/licenciamentos']);
      }
    });
  }

  delete(): void {
    this.service.delete(this.licenciamento.id).subscribe({
      next: () => {
        this.toast.success('Licenciamento excluído com sucesso!', 'Excluído');
        this.router.navigate(['/licenciamentos']);
      },
      error: (ex) => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element: { message: string; }) => {
            this.toast.error(element.message);
          });
        } else {
          this.toast.error(ex.error.message || 'Ocorreu um erro na exclusão.');
        }
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/licenciamentos']);
  }

}
