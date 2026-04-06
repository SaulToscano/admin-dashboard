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
    path: 'roles',
    loadChildren: () => import('./features/roles/roles.routes').then(m => m.ROLES_ROUTES),
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.routes').then(m => m.USERS_ROUTES),
  },
  {
    path: 'clients',
    loadChildren: () => import('./features/clients/clients.routes').then(m => m.CLIENTS_ROUTES),
  },
  // 3. Ruta Comodín (404 o Redirección)
  {
    path: 'error',
    loadChildren: () => import('@features/errors/errors.routes').then(m => m.ERRORS_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];
