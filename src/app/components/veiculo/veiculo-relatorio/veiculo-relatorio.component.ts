import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../../../services/veiculo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-veiculo-relatorio',
  templateUrl: './veiculo-relatorio.component.html',
  styleUrls: ['./veiculo-relatorio.component.css']
})
export class VeiculoRelatorioComponent implements OnInit {

  dataInicio: string = '';
  dataFim: string = '';
  vencimentos: any[] = [];

  finalPlacaGeral: string = '';
  licenciamentosGerais: any[] = [];

  finalPlacaProprietario: string = '';
  proprietarioId: string = '';
  licenciamentosProprietario: any[] = [];

  constructor(
    private service: VeiculoService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }

  private formatDate(date: string): string {
    if (!date) {
      return '';
    }
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }

  gerarRelatorioVencimentos() {
    if (!this.dataInicio || !this.dataFim) {
      this.toast.error('Os campos Data Início e Data Fim são obrigatórios.', 'Erro de Validação');
      return;
    }
    const dataInicioFormatada = this.formatDate(this.dataInicio);
    const dataFimFormatada = this.formatDate(this.dataFim);
    this.service.getVencimentos(dataInicioFormatada, dataFimFormatada).subscribe({
      next: dados => {
        this.vencimentos = dados;
      },
      error: err => {
        if (err.status === 404) {
          this.vencimentos = [];
          this.toast.info(err.error.message, 'Informação');
        } else {
          this.toast.error('Ocorreu um erro ao buscar o relatório.', 'Erro');
        }
      }
    });
  }

  limparRelatorioVencimentos() {
    this.vencimentos = [];
    this.dataInicio = '';
    this.dataFim = '';
  }

  gerarRelatorioLicenciamentoGeral() {
    if (!this.finalPlacaGeral) {
      this.toast.error('O campo Final da Placa é obrigatório.', 'Erro de Validação');
      return;
    }
    this.service.getLicenciamentoGeralByFinalPlaca(this.finalPlacaGeral).subscribe({
      next: dados => {
        this.licenciamentosGerais = dados;
      },
      error: err => {
        if (err.status === 404) {
          this.licenciamentosGerais = [];
          this.toast.info(err.error.message, 'Informação');
        } else {
          this.toast.error('Ocorreu um erro ao buscar o relatório.', 'Erro');
        }
      }
    });
  }

  limparRelatorioLicenciamentoGeral() {
    this.licenciamentosGerais = [];
    this.finalPlacaGeral = '';
  }

  gerarRelatorioLicenciamentoProprietario() {
    if (!this.finalPlacaProprietario || !this.proprietarioId) {
      this.toast.error('Os campos Final da Placa e ID do Proprietário são obrigatórios.', 'Erro de Validação');
      return;
    }
    this.service.getLicenciamentoByFinalPlacaAndProprietario(this.finalPlacaProprietario, this.proprietarioId).subscribe({
      next: dados => {
        this.licenciamentosProprietario = dados;
      },
      error: err => {
        if (err.status === 404) {
          this.licenciamentosProprietario = [];
          this.toast.info(err.error.message, 'Informação');
        } else {
          this.toast.error('Ocorreu um erro ao buscar o relatório.', 'Erro');
        }
      }
    });
  }

  limparRelatorioLicenciamentoProprietario() {
    this.licenciamentosProprietario = [];
    this.finalPlacaProprietario = '';
    this.proprietarioId = '';
  }
}
