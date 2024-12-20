import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginErrorService {
  private errorCodeSource = new BehaviorSubject<number | undefined>(undefined);
  private errorMessageSource = new BehaviorSubject<string | undefined>(undefined);

  errorCode$ = this.errorCodeSource.asObservable();
  errorMessage$ = this.errorMessageSource.asObservable();

  setError(code?: number, message?: string): void {
    this.errorCodeSource.next(code);
    this.errorMessageSource.next(message);
  }

  clearError(): void {
    this.errorCodeSource.next(undefined);
    this.errorMessageSource.next(undefined);
  }
}
