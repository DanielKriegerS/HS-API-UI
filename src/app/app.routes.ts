import { Routes } from '@angular/router';
import { LoginDisplayComponent } from '../components/login-display/login-display.component';
import { RegisterDisplayComponent } from '../components/register-display/register-display.component';


export const appRoutes: Routes = [
  { path: 'login', component: LoginDisplayComponent }, 
  { path: 'register', component: RegisterDisplayComponent},
  { path: '**', redirectTo: '' }, 
];
