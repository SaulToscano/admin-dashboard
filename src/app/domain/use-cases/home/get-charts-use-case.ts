import { Injectable } from '@angular/core';
import { BarChart, DashboardKpis, LineChart, PieChart } from '@domain/models/home/chart';
import { HomeGateway } from '@domain/models/home/gateway/home-gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetChartsUseCases {
  constructor(private _homeGateWay: HomeGateway) {}

  getLineChart(): Observable<LineChart> {
    return this._homeGateWay.getLineChart();
  }

  getPieChart(): Observable<PieChart> {
    return this._homeGateWay.getPieChart();
  }

  getBarChart(): Observable<BarChart> {
    return this._homeGateWay.getBarChart();
  }
  
  getKpis(): Observable<DashboardKpis> {
    return this._homeGateWay.getKpis();
  }
}
