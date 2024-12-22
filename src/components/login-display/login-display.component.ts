import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../../app/services/login.service';
import { AuthErrorService } from '../../app/services/auth-error.service';
import { FormsModule } from '@angular/forms';
import { FormErrorComponent } from '../auth-error/auth-error.component';

@Component({
  selector: 'app-login-display',
  standalone: true,
  imports: [CommonModule, FormsModule, FormErrorComponent],
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.scss']
})
export class LoginDisplayComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private errorService: AuthErrorService) {}

  onLogin(): void {
      this.errorService.clearError();
  
      this.loginService.login(this.email, this.password).subscribe({
        next: () => {
          alert('Login bem-sucedido!');
        },
        error: (error: HttpErrorResponse) => {
            const errorMessage = error.error?.message || 'Erro desconhecido';
            this.errorService.setError(error.status, errorMessage);
          }
        })
      }  
}
