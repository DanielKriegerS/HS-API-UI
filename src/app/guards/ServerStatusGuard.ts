import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServerStatusService } from '../app/services/server-status.service';

@Injectable({
  providedIn: 'root',
})
export class ServerStatusGuard implements CanActivate {
  constructor(
    private serverStatusService: ServerStatusService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.serverStatusService.checkServerStatus().pipe(
      map((isOnline) => {
        if (!isOnline) {
          this.router.navigate(['/error']);
          return false;
        }
        return true;
      }),
      catchError(() => {
        this.router.navigate(['/error']);
        return of(false);
      })
    );
  }  
}
