import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { LoginResponse } from '../models/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/users/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { email, password }).pipe(
      tap((response: LoginResponse) => {
        localStorage.setItem('authToken', response.token);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          return throwError(() => new Error('Não foi possível conectar ao servidor. Verifique sua conexão.'));
        }
        return throwError(() => error); 
      })
    );
  }
  

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}

