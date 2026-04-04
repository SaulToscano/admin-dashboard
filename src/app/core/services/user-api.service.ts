import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserGateway } from '@domain/models/user/gateway/user-gateway';
import { User } from '@domain/models/user/user';
import { usersMock } from 'public/mockups/users';
import { Observable, of } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root',
})
export class UserApiService extends UserGateway {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    super();
  }

  getAllUsers(): Observable<User[]> {
    return of(usersMock);
  }

  deleteUser(id: number): Observable<void> {
    console.log('Eliminando usuario:', id);
    return of(undefined);
  }
}