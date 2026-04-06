import { Injectable } from '@angular/core';
import { Client } from '@domain/models/client/client';
import { ClientGateway } from '@domain/models/client/gateway/client-gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetClientsUseCase {
  constructor(private _clientGateway: ClientGateway) {}

  execute(): Observable<Client[]> {
    return this._clientGateway.getAllClients();
  }
}