import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthErrorComponent } from '../auth-error/auth-error.component';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthErrorService } from '../../app/services/auth-error.service';
import { RegisterService } from '../../app/services/register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-display',
  standalone: true,
  imports: [FormsModule, CommonModule, AuthErrorComponent],
  templateUrl: './register-display.component.html',
  styleUrl: './register-display.component.scss'
})
export class RegisterDisplayComponent {
  email: string = '';
  password: string = '';

  constructor(private registerService: RegisterService, private errorService: AuthErrorService, private router: Router) {}

  onRegister(): void {
    this.errorService.clearError();

    this.registerService.register(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/profile']);
      },
      error: (error: HttpErrorResponse) => {
        const errorMessage = error.error?.message || 'Erro desconhecido';
        this.errorService.setError('register', error.status, errorMessage);
      },
    });
  }
}
