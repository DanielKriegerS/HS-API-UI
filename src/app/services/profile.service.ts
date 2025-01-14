import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Profile } from '../models/Profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly baseUrl = `${environment.apiBaseUrl}/profiles`; 

  constructor(private http: HttpClient) {}

  /**
   * Busca o perfil de um usuário pelo ID.
   * @param id UUID do usuário.
   * @returns Observable com os dados do perfil.
   */
  getProfileByUserId(userId: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseUrl}/${userId}`);
  }
}
