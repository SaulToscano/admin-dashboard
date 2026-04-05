import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES),
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.routes').then(m => m.USERS_ROUTES),
  },
  // 3. Ruta Comodín (404 o Redirección)
  {
    path: '**',
    redirectTo: '', // Si escriben algo raro, los mandamos al Home
    pathMatch: 'full'
  }
];
