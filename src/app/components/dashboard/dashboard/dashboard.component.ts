import { Component } from '@angular/core';
import {DashboardService} from "../../../services/dashboard.service";
import {ChartDataset, ChartOptions, ChartType} from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  estatisticas: any = {
    totalProprietarios: 0,
    totalVeiculos: 0,
    totalOrdemServico: 0,
  };

  ordemServicoTotalAbertas: number = 0;
  ordemServicoTotalFinalizadas: number = 0;
  ordemServicoTotalCanceladas: number = 0;

  proprietariosPorMesLabels: string[] = [];
  proprietariosPorMesData: ChartDataset[] = [
    {
      label: 'Proprietários',
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1
    }
  ];

  veiculosPorMesLabels: string[] = [];
  veiculosPorMesData: ChartDataset[] = [
    {
      label: 'Veículos',
      data: [],
      backgroundColor: [],
      borderColor: [],
      borderWidth: 1
    }
  ];

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Mês/Ano'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Quantidade'
        },
        beginAtZero: true
      }
    }
  };

  barChartLegend = true;
  barChartType: ChartType = 'bar';

  ordemServicoStatusChartLabels: string[] = ['Abertas', 'Finalizadas', 'Canceladas'];
  ordemServicoStatusChartData: number[] = [0, 0, 0];
  chartColors: any[] = [
    { backgroundColor: ['#FFC107', '#28A745', '#DC3545'] }
  ];
  chartOptions: any = { responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10,
          font: {
            size: 12,
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
        borderColor: '#FFFFFF',
      },
    },
  };

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getEstatisticas();
    this.carregarDadosProprietariosPorMes();
    this.carregarDadosVeiculosPorMes();
    this.carregarOrdemServicoTotaisPorStatus();
  }

  getEstatisticas(): void {
    this.dashboardService.getEstatisticas().subscribe(data => {
      this.estatisticas = data;
    });
  }

  carregarDadosProprietariosPorMes(): void {
    this.dashboardService.getProprietariosPorMes().subscribe(data => {
      this.proprietariosPorMesLabels = data.map(item => this.formatarMesAno(item.mes, item.ano));
      this.proprietariosPorMesData = [
        {
          label: 'Proprietários',
          data: data.map(item => item.total),
          backgroundColor: 'rgba(139,218,113,0.7)',
          borderColor: 'rgb(247,250,250)',
          borderWidth: 1
        }
      ];
    });
  }

  carregarDadosVeiculosPorMes(): void {
    this.dashboardService.getVeiculosPorMes().subscribe(data => {
      this.veiculosPorMesLabels = data.map(item => this.formatarMesAno(item.mes, item.ano));
      this.veiculosPorMesData = [
        {
          label: 'Veículos',
          data: data.map(item => item.total),
          backgroundColor: 'rgba(60,164,248,0.75)',
          borderColor: 'rgba(247,250,250)',
          borderWidth: 1
        }
      ];
    });
  }

  carregarOrdemServicoTotaisPorStatus() {
    this.dashboardService.getOrdemServicoTotaisPorStatus().subscribe(
      data => {
        this.ordemServicoStatusChartData = [
          data.find(d => d.status === 'ABERTA')?.total || 0,
          data.find(d => d.status === 'FINALIZADA')?.total || 0,
          data.find(d => d.status === 'CANCELADA')?.total || 0
        ];
        this.ordemServicoTotalAbertas = this.ordemServicoStatusChartData[0];
        this.ordemServicoTotalFinalizadas = this.ordemServicoStatusChartData[1];
        this.ordemServicoTotalCanceladas = this.ordemServicoStatusChartData[2];
      },
      error => {
        console.error('Erro ao carregar totais por status', error);
      }
    );
  }

  formatarMesAno(mes: number, ano: number): string {
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return `${meses[mes - 1]}/${ano}`;
  }

}
