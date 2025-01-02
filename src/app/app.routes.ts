import { Routes } from '@angular/router';
import { ServerStatusGuard } from '../guards/ServerStatusGuard';

export const appRoutes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('../components/login-display/login-display.component').then(
        (m) => m.LoginDisplayComponent
      ),
    canActivate: [ServerStatusGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('../components/register-display/register-display.component').then(
        (m) => m.RegisterDisplayComponent
      ),
    canActivate: [ServerStatusGuard],
  },
  {
    path: 'error',
    loadComponent: () =>
      import('../components/server-off-error/server-off-error.component').then(
        (m) => m.ServerOffErrorComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
