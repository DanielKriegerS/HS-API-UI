import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/Profile';

@Component({
  selector: 'app-profile-display',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './profile-display.component.html',
  styleUrl: './profile-display.component.scss'
})

export class ProfileDisplayComponent {
  activeTab: string = 'profile';

  userProfile: Profile = {
    username: '',
    phone: '',
    birthday: '',
    age: 0,
    id: ''
  };
  
  constructor(private profileService: ProfileService) {}

  isEditing: boolean = false;

  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  saveChanges(): void {
    this.isEditing = false;
    alert('Alterações salvas com sucesso!');
  }

  cancelEdit(): void {
    this.isEditing = false;
  }
  
  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
      console.error('Usuário não logado ou userId ausente no localStorage');
      return;
    }
  
    this.profileService.getProfileByUserId(userId).subscribe({
      next: (response) => {
        console.log('Perfil carregado:', response); 
        this.userProfile = response; 
      },
      error: (err) => {
        console.error('Erro ao carregar o perfil:', err);
      },
    });
  }
}