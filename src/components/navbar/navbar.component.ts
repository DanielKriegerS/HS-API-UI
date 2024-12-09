import { Component, ElementRef } from '@angular/core';
import { NavigationService } from '../../app/services/navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private navigationService: NavigationService, private el: ElementRef) {}

  showComponent(componentName: string): void {
    this.navigationService.setActiveComponent(componentName);
    this.closeNavbar(); 
  }

  closeNavbar(): void {
    const navbar = this.el.nativeElement.querySelector('#navbarContent');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}
