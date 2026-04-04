import { Observable } from 'rxjs';
import { LineChart, PieChart } from '../chart';

export abstract class HomeGateway {
  abstract getLineChart(): Observable<LineChart>;
  abstract getPieChart(): Observable<PieChart>;
}
