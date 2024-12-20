import { Routes } from '@angular/router';
import { LoginDisplayComponent } from '../components/login-display/login-display.component';


export const appRoutes: Routes = [
  { path: 'login', component: LoginDisplayComponent }, 
  { path: '**', redirectTo: '' }, 
];
