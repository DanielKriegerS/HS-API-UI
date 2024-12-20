import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private el: ElementRef) {}

  closeNavbar(): void {
    const navbar = this.el.nativeElement.querySelector('#navbarContent');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
}
