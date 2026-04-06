import { Injectable } from '@angular/core';
import { RoleGateway } from '@domain/models/role/gateway/role-gateway';
import { Permission, Role } from '@domain/models/role/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetRolesUseCase {
  constructor(private _roleGateway: RoleGateway) {}

  executeRoles(): Observable<Role[]> {
    return this._roleGateway.getRoles();
  }

  executePermissions(): Observable<Permission[]> {
    return this._roleGateway.getPermissions();
  }
}