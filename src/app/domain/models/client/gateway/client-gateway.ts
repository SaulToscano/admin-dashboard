import { Observable } from 'rxjs';
import { Client } from '../client';

export abstract class ClientGateway {
  abstract getAllClients(): Observable<Client[]>;
  abstract suspendClient(id: number): Observable<void>;
}