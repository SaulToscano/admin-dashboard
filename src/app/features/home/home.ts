import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DatePickerModule } from 'primeng/datepicker';
import { ToastModule } from 'primeng/toast';

import { BarChart, DashboardKpis, LineChart, PieChart } from '@domain/models/home/chart';
import { GetChartsUseCases } from '@domain/use-cases/home/get-charts-use-case';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    CommonModule,
    DatePickerModule,
    CardModule,
    ToastModule,
    ChartModule,
    FormsModule,
  ],
})
export class Home implements OnInit {
  isLoading: boolean = false;
  rangeDates!: Date[] | undefined;

  pieChart!: PieChart;
  lineChart!: LineChart;
  barChart!: BarChart;
  kpis!: DashboardKpis;

  pieChartOptions: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        enabled: true,
        mode: 'index'
      }
    },
    responsive: true,
    maintainAspectRatio: false
  };

  lineChartOptions: ChartOptions<'line'> = {
    plugins: {
      legend: {
        display: true,
        position: 'top'
      },
      tooltip: {
        enabled: true,
        mode: 'index'
      }
    },
    responsive: true,
    maintainAspectRatio: true
  };

  barChartOptions: ChartOptions<'bar'> = {
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit(): void {
    this.loadElements();
  }

  constructor(
    private _messageService: MessageService,
    private _getCharts: GetChartsUseCases,
  ) {}

  loadElements() {
    this.isLoading = true;

    forkJoin({
      line: this._getCharts.getLineChart(),
      pie: this._getCharts.getPieChart(),
      bar: this._getCharts.getBarChart(),
      stats: this._getCharts.getKpis()
    }).subscribe({
      next: (results) => {
        this.lineChart = results.line;
        this.pieChart = results.pie;
        this.barChart = results.bar;
        this.kpis = results.stats;
        
        this.isLoading = false;
        this._messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Dashboard cargado' });
      },
      error: (error) => {
        this.isLoading = false;
        this._messageService.add({ severity: 'error', summary: 'Error', detail: 'Fallo al cargar datos' });
      }
    });
  }

  dateChangeHandler() {
    this._messageService.add({ severity: 'info', summary: 'Filtro aplicado', detail: 'Datos actualizados' });
  }
}
