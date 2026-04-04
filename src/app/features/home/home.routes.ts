import { Routes } from '@angular/router';
//import { AuthGuard } from '../../core/auth/auth.guard';
import { Home } from './home';

export const  HOME_ROUTES: Routes = [
  {
    path: '',
    component: Home,
    //canActivate: [AuthGuard]
  },
];
