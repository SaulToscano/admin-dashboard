import { Routes } from '@angular/router';
//import { AuthGuard } from '../../core/auth/auth.guard';
import { Clients } from './clients';

export const  CLIENTS_ROUTES: Routes = [
  {
    path: '',
    component: Clients,
    //canActivate: [AuthGuard]
  },
];
