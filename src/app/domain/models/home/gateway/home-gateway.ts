import { Observable } from 'rxjs';
import { BarChart, DashboardKpis, LineChart, PieChart } from '../chart';

export abstract class HomeGateway {
  abstract getLineChart(): Observable<LineChart>;
  abstract getPieChart(): Observable<PieChart>;
  abstract getBarChart(): Observable<BarChart>;
  abstract getKpis(): Observable<DashboardKpis>;
}
