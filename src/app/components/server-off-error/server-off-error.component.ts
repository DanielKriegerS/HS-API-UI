import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, switchMap, takeWhile } from 'rxjs';
import { ServerStatusService } from '../../app/services/server-status.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-off-error',
  standalone: true,
  imports: [],
  templateUrl: './server-off-error.component.html',
  styleUrl: './server-off-error.component.scss'
})
export class ServerOffErrorComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public message: string = 'Tentando reconectar ao servidor...';

  constructor(
    private serverStatusService: ServerStatusService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = interval(5000)
      .pipe(
        switchMap(() => this.serverStatusService.checkServerStatus()),
        takeWhile((isOnline) => !isOnline, true)
      )
      .subscribe({
        next: (isOnline) => {
          if (isOnline) {
            this.message = 'Servidor reconectado! Redirecionando...';
            setTimeout(() => this.router.navigate(['']), 2000); 
          }
        },
        error: (err) => {
          console.error('Erro ao verificar status do servidor:', err);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}