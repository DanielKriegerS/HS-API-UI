import { Component, OnInit } from '@angular/core';
import { AuthErrorService } from '../../app/services/auth-error.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-error.component.html',
  styleUrls: ['./auth-error.component.scss']
})
export class AuthErrorComponent implements OnInit {
  errorCode?: number;
  errorMessage?: string;

  constructor(private errorService: AuthErrorService) {}

  ngOnInit(): void {
    this.errorService.errorCode$.subscribe(code => (this.errorCode = code));
    this.errorService.errorMessage$.subscribe(message => (this.errorMessage = message));
  }

  get displayMessage(): string {
    if (!this.errorCode || !this.errorMessage) {
      return '';
    }

    switch (this.errorCode) {
      case 0:
        return 'O servidor está indisponível no momento.';
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
