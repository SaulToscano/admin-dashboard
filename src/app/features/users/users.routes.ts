import { Routes } from '@angular/router';
//import { AuthGuard } from '../../core/auth/auth.guard';
import { Users } from './users';

export const  USERS_ROUTES: Routes = [
  {
    path: '',
    component: Users,
    //canActivate: [AuthGuard]
  },
];
