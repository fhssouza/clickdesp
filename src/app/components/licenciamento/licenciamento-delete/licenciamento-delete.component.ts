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

// Objeto para armazenar os dados do licenciamento que será exibido para exclusão
  licenciamento: Licenciamento = {
    id: '',
    finaPlaca: '',
    dataVencimento: '',
    anoReferencia: 0
  }

  // Injetando os serviços necessários
  constructor(
    private service: LicenciamentoService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute, // Para pegar o ID da URL
  ) { }

  ngOnInit(): void {
    // Pega o ID da URL e busca os dados do licenciamento
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.licenciamento.id = id;
      this.findById();
    } else {
      this.toast.error('ID do licenciamento não encontrado na URL.', 'Erro');
      this.router.navigate(['/licenciamentos']);
    }
  }

  /**
   * Busca os dados do licenciamento no backend para exibir na tela de confirmação.
   */
  findById(): void {
    this.service.findById(this.licenciamento.id).subscribe({
      next: (resposta) => {
        this.licenciamento = resposta;
      },
      error: (ex) => {
        // Se não encontrar o licenciamento, exibe erro e volta para a lista
        this.toast.error(ex.error.error || 'Erro ao buscar licenciamento.');
        this.router.navigate(['/licenciamentos']);
      }
    });
  }

  /**
   * Chama o serviço para excluir o licenciamento e trata a resposta.
   */
  delete(): void {
    this.service.delete(this.licenciamento.id).subscribe({
      next: () => {
        this.toast.success('Licenciamento excluído com sucesso!', 'Excluído');
        this.router.navigate(['/licenciamentos']);
      },
      error: (ex) => {
        // Trata possíveis erros vindos do backend
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

  /**
   * Navega de volta para a lista de licenciamentos caso o usuário desista.
   */
  cancelar(): void {
    this.router.navigate(['/licenciamentos']);
  }
}
