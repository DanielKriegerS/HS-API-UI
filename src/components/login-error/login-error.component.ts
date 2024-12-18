import { CommonModule } from '@angular/common';
import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-login-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-error.component.html',
  styleUrl: './login-error.component.scss'
})
export class LoginErrorComponent {
  @Input() errorCode?: number;
  @Input() errorMessage?: string;

  get displayMessage(): string {
    if (!this.errorCode || !this.errorMessage) {
      return '';
    }

    switch (this.errorCode) {
      case 0:
        return 'O servidor está indisponível no momento. Tente novamente mais tarde.';
      case 404:
        return 'Usuário não encontrado. Verifique seu e-mail.';
      case 400:
        return 'Preencha os campos corretamente.';
      case 401:
        return 'Senha incorreta. Tente novamente.';
      default:
        return 'Ocorreu um erro. Tente novamente mais tarde.';
    }
  }
}
