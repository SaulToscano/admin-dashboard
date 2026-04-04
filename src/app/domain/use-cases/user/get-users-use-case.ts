import { Injectable } from '@angular/core';
import { UserGateway } from '@domain/models/user/gateway/user-gateway';
import { User } from '@domain/models/user/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetUsersUseCase {
  constructor(private _userGateway: UserGateway) {}

  execute(): Observable<User[]> {
    return this._userGateway.getAllUsers();
  }
}