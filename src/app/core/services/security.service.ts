import { Injectable } from '@angular/core';
import { UserLoginRequest, UserLoginResponse } from '../models/user.model';
import { MOCK_USERS } from '@mocks';
import { ISecurityService } from './interfaces/security.interface.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService implements ISecurityService {
  private readonly TOKEN_KEY = 'token'
  private readonly USER_KEY = 'current-user'
  constructor() { }

  login(userLoginRequest: UserLoginRequest): UserLoginResponse | null {
    const users = [...MOCK_USERS];
    const user = users.find(u => u.email === userLoginRequest.email && u.password === userLoginRequest.password)
    if (user !== undefined) {
      let userLoginResponse: UserLoginResponse = {
        token: 'fake-jwt-token',
        user: user
      };
      this.saveLocalStorage(userLoginResponse)
      return userLoginResponse
    }
    return null;
  }

  private saveLocalStorage(userLoginResponse: UserLoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, userLoginResponse.token!);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userLoginResponse.user));
  }

  getCurrentUser(): UserLoginResponse | null {
    const userJson = localStorage.getItem(this.USER_KEY)
    if (userJson) {
      const user: UserLoginResponse = {
        user: JSON.parse(userJson)
      }
      return user;
    }
    return null;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }
}
