import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-display',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile-display.component.html',
  styleUrl: './profile-display.component.scss'
})

export class ProfileDisplayComponent {
  // Abas
  activeTab: string = 'profile';

  // Informações do perfil
  isEditing: boolean = false;
  username: string = 'John Doe';
  phone: string = '(123) 456-7890';
  birthday: string = '1990-01-01';
  age: number | null = 33;

  // Alternar para modo de edição
  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  // Salvar alterações
  saveChanges(): void {
    this.isEditing = false;
    alert('Alterações salvas com sucesso!');
  }

  // Cancelar edição
  cancelEdit(): void {
    this.isEditing = false;
  }
}
