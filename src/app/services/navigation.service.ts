import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private activeComponent = new BehaviorSubject<string | null>(null); // Componente ativo
  activeComponent$ = this.activeComponent.asObservable(); // Observable para ouvir mudanças

  setActiveComponent(componentName: string | null): void {
    this.activeComponent.next(componentName);
  }

  resetNavigation(): void {
    this.activeComponent.next(null);
  }
}
