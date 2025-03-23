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

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getEstatisticas();
    this.carregarDadosProprietariosPorMes();
    this.carregarDadosVeiculosPorMes()
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
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ];
    });
  }

  formatarMesAno(mes: number, ano: number): string {
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return `${meses[mes - 1]}/${ano}`;
  }

}
