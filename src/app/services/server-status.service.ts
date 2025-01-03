import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from '../environments/environment prod';

@Injectable({
  providedIn: 'root'
})
export class ServerStatusService {
  
  constructor(private http: HttpClient) {}

  checkServerStatus() {
    return this.http.get(`${environment.apiBaseUrl}/health`).pipe(
      map(() => true),
      catchError((error) => {
        if (error.status == 0) {
          console.error('Servidor offline: conexão recusada. Tente novamente mais tarde.');
          return of(false);
        }

        return of(true);
      })
    );
  }
}
