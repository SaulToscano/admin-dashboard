import { Routes } from '@angular/router';
import { Login } from './login/login';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: Login,
  },
  // Si en el futuro agregas recuperar contraseña, iría aquí:
  // {
  //   path: 'recuperar-password',
  //   loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  // },
  {
    // Si alguien escribe solo "/auth" en la URL, lo mandamos al login
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];