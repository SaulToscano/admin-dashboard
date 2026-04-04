import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { APP_CONFIG, AppConfig } from '../config/app.config';
import { LoggerService } from '../logger/logger.service';

import { BarChart, DashboardKpis, LineChart, PieChart } from '@domain/models/home/chart';
import { HomeGateway } from '@domain/models/home/gateway/home-gateway';

import { barChart, dashboardKpis, lineChart, pieChart } from 'public/mockups/charts';

@Injectable({
  providedIn: 'root',
})
export class HomeApiService extends HomeGateway {
  private readonly apiUrl: string;

  constructor(
    private readonly http: HttpClient,
    private logger: LoggerService,
    @Inject(APP_CONFIG) private readonly config: AppConfig
  ) {
    super();
    this.apiUrl = `${this.config.apiBaseUrl}/home/charts`;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    this.logger.error('API Error:', error.message);
    return throwError(() => new Error('Error communicating with API'));
  }

  getLineChart(): Observable<LineChart> {
    this.logger.log('Fetching Line chart data');
    /* return this.http.get<LineChart>(this.apiUrl).pipe(
      map((response) => response.data),
      catchError(this.handleError)
    ); */
    return new Observable(observer => {
      observer.next(lineChart);
      observer.complete();
    })
  }

  getPieChart(): Observable<PieChart> {
    this.logger.log('Fetching pie chart data');
    /* return this.http.get<PieChart>(this.apiUrl).pipe(
      catchError(this.handleError)
    ); */
    return new Observable(observer => {
      observer.next(pieChart);
      observer.complete();
    })
  }

  getBarChart(): Observable<BarChart> {
    this.logger.log('Fetching Bar chart data');
    return new Observable(observer => {
      observer.next(barChart);
      observer.complete();
    });
  }

  getKpis(): Observable<DashboardKpis> {
    this.logger.log('Fetching KPIs data');
    return new Observable(observer => {
      observer.next(dashboardKpis);
      observer.complete();
    });
  }
}
