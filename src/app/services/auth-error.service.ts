import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthErrorService {
  private errorContextSource = new BehaviorSubject<'login' | 'register' | undefined>(undefined);
  private errorCodeSource = new BehaviorSubject<number | undefined>(undefined);
  private errorMessageSource = new BehaviorSubject<string | undefined>(undefined);

  errorContext$ = this.errorContextSource.asObservable();
  errorCode$ = this.errorCodeSource.asObservable();
  errorMessage$ = this.errorMessageSource.asObservable();

  setError(context: 'login' | 'register', code?: number, message?: string): void {
    this.errorContextSource.next(context);
    this.errorCodeSource.next(code);
    this.errorMessageSource.next(message);
  }

  clearError(): void {
    this.errorContextSource.next(undefined);
    this.errorCodeSource.next(undefined);
    this.errorMessageSource.next(undefined);
  }
}
