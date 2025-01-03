import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../../app/services/login.service';
import { AuthErrorService } from '../../app/services/auth-error.service';
import { FormsModule } from '@angular/forms';
import { AuthErrorComponent } from '../auth-error/auth-error.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-display',
  standalone: true,
  imports: [CommonModule, FormsModule, AuthErrorComponent],
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.scss']
})
export class LoginDisplayComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private errorService: AuthErrorService, private router: Router) {}

  onLogin(): void {
    this.errorService.clearError();

    this.loginService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/feed']);
      },
      error: (error: HttpErrorResponse) => {
        const errorMessage = error.error?.message || 'Erro desconhecido';
        this.errorService.setError('login', error.status, errorMessage);
      },
    });
  }
}
