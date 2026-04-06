import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Client } from '@domain/models/client/client';
import { ClientGateway } from '@domain/models/client/gateway/client-gateway';
import { clientsMock } from 'public/mockups/clients';
import { Observable, of } from 'rxjs';
import { APP_CONFIG, AppConfig } from '../config/app.config';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class ClientApiService extends ClientGateway {
  constructor(
    private http: HttpClient,
    private logger: LoggerService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) {
    super();
  }

  getAllClients(): Observable<Client[]> {
    this.logger.log('Fetching app clients');
    return of(clientsMock);
  }

  suspendClient(id: number): Observable<void> {
    this.logger.log(`Suspending client ${id} for policy violation`);
    return of(undefined);
  }
}