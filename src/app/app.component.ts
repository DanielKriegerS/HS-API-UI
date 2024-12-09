import { Component } from '@angular/core';
import { NavigationService } from './services/navigation.service';
import { HeaderComponent } from "../components/header/header.component";
import { LoginDisplayComponent } from "../components/login-display/login-display.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent, LoginDisplayComponent, CommonModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeComponent: string | null = null;

  constructor(private navigationService: NavigationService) {
    this.navigationService.activeComponent$.subscribe((componentName) => {
      this.activeComponent = componentName;
    });
  }
}
