import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthErrorService } from '../../services/auth-error.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-error.component.html',
  styleUrls: ['./auth-error.component.scss'],
})
export class AuthErrorComponent implements OnInit {
  errorContext?: 'login' | 'register';
  errorCode?: number;
  errorMessage?: string;
  attemptsLeft: number = 3;

  constructor(private errorService: AuthErrorService, private router: Router) {}

  ngOnInit(): void {
    this.errorService.errorContext$.subscribe(context => (this.errorContext = context));
    this.errorService.errorCode$.subscribe(code => {
      this.errorCode = code;
      if (code === 401 && this.attemptsLeft > 0) {
        this.attemptsLeft--;
      }
    });
    this.errorService.errorMessage$.subscribe(message => (this.errorMessage = message));

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.errorService.clearError();
        this.attemptsLeft = 3; // thats not permanent
      }
    });
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
