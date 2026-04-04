import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartOptions } from 'chart.js';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { DatePickerModule } from 'primeng/datepicker';
import { ToastModule } from 'primeng/toast';

import { LineChart, PieChart } from '@domain/models/home/chart';
import { GetChartsUseCases } from '@domain/use-cases/home/get-charts-use-case';

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

  pieChartOptions: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: true,
        position: 'top' // posición de la leyenda: 'top', 'bottom', 'left', 'right'
      },
      tooltip: {
        enabled: true,
        mode: 'index'
      }
    },
    responsive: true, // permite que el gráfico se ajuste al tamaño del contenedor
    maintainAspectRatio: false // si no deseas mantener la proporción original
  };

  lineChartOptions: ChartOptions<'line'> = {
    plugins: {
      legend: {
        display: true,
        position: 'top' // posición de la leyenda: 'top', 'bottom', 'left', 'right'
      },
      tooltip: {
        enabled: true,
        mode: 'index'
      }
    },
    responsive: true, // permite que el gráfico se ajuste al tamaño del contenedor
    maintainAspectRatio: true // si no deseas mantener la proporción original
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
    this._getCharts.getLineChart().subscribe({
      next: (data) => {
        this.lineChart = data;
        this.isLoading = false;
        this._getCharts.getPieChart().subscribe({
          next: (data) => {
            this.pieChart = data;
            this._messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Line chart cargada correctamente!',
            });
            this.isLoading = false;
          },
          error: (error) => {
            this._messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: `No se pudieron cargar las tablas: ${error}`,
            });
            this.isLoading = false;
          },
        })
      },
      error: (error) => {
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `No se pudieron cargar las tablas: ${error}`,
        });
        this.isLoading = false;
      },
    });
  };

  dateChangeHandler() {
    console.log(this.rangeDates, 'date');
    this._messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'Line chart cargada correctamente!',
    });
  };
}
