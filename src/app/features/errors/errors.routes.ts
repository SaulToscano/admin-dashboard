import { Routes } from '@angular/router';
//import { AuthGuard } from '../../core/auth/auth.guard';
import { NotFound } from './not-found/not-found';

export const  ERRORS_ROUTES: Routes = [
  {
    path: '404',
    component: NotFound,
    //canActivate: [AuthGuard]
  },
];
