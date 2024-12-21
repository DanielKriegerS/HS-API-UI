import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register-display',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-display.component.html',
  styleUrl: './register-display.component.scss'
})
export class RegisterDisplayComponent {

}
