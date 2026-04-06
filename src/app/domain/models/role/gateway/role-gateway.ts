import { Observable } from 'rxjs';
import { Permission, Role } from '../role';

export abstract class RoleGateway {
  abstract getRoles(): Observable<Role[]>;
  abstract getPermissions(): Observable<Permission[]>;
}