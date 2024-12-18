import { Component } from '@angular/core';
import { LoginService } from '../../app/services/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginErrorComponent } from '../login-error/login-error.component';

@Component({
  selector: 'app-login-display',
  standalone: true,
  imports: [FormsModule, CommonModule, LoginErrorComponent],
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.scss']
})
export class LoginDisplayComponent {
  email: string = '';
  password: string = '';
  errorCode?: number;
  errorMessage?: string;

  constructor(private http: HttpClient) {}

  onLogin(): void {
    const loginPayload = { email: this.email, password: this.password };

    this.http.post('http://localhost:8080/users/login', loginPayload).subscribe({
      next: () => {
        this.errorCode = undefined;
        this.errorMessage = undefined;
        alert('Login bem-sucedido!');
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 0) {
          this.errorCode = error.status;
          this.errorMessage = 'Não foi possível conectar ao servidor. Verifique sua conexão ou tente novamente mais tarde.';
        } else {
          this.errorCode = error.status;
          this.errorMessage = error.error?.message || 'Erro desconhecido';
        }
      }
    });
  }
}
