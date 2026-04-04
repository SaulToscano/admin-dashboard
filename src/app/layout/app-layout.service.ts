import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private showLayoutSubject = new BehaviorSubject<boolean>(true);
  showLayout$ = this.showLayoutSubject.asObservable();

  setShowLayout(value: boolean) {
    this.showLayoutSubject.next(value);
  }
}
