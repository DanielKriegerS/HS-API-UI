import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:8080/users/register';

  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<void> {
    return this.http.post<void>(this.apiUrl, { email, password }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 0) {
          return throwError(() => new Error('Não foi possível conectar ao servidor. Verifique sua conexão.'));
        }
        return throwError(() => error);
      })
    );
  }
}

