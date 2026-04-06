import { Injectable } from '@angular/core';
import { RoleGateway } from '@domain/models/role/gateway/role-gateway';
import { Permission, Role } from '@domain/models/role/role';
import { permissionsMock, rolesMock } from 'public/mockups/roles';
import { Observable, of } from 'rxjs';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class RoleApiService extends RoleGateway {
  constructor(private logger: LoggerService) {
    super();
  }

  getRoles(): Observable<Role[]> {
    this.logger.log('Fetching roles mock');
    return of(rolesMock);
  }

  getPermissions(): Observable<Permission[]> {
    this.logger.log('Fetching permissions mock');
    return of(permissionsMock);
  }
}