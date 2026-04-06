import { Routes } from '@angular/router';
//import { AuthGuard } from '../../core/auth/auth.guard';
import { Roles } from './roles';

export const  ROLES_ROUTES: Routes = [
  {
    path: '',
    component: Roles,
    //canActivate: [AuthGuard]
  },
];
