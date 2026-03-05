import { Injectable } from '@angular/core';
import { UserLoginRequest, UserLoginResponse } from '@core/models';
import { MOCK_USERS } from '@mocks';
import { ISecurityService } from '@core/services/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityMockService implements ISecurityService {
  private readonly TOKEN_KEY = 'token'
  private readonly USER_KEY = 'current-user'

  //Behaviour subject
  private currentUserSubject = new BehaviorSubject<UserLoginResponse | null>(null);
  public currentUser$: Observable<UserLoginResponse | null> = this.currentUserSubject.asObservable();

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

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
      this.currentUserSubject.next(userLoginResponse);
      this.isAuthenticatedSubject.next(true);
      return userLoginResponse
    }
    return null;
  }

  private saveLocalStorage(userLoginResponse: UserLoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, userLoginResponse.token!);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userLoginResponse.user));
  }

  getCurrentUser(): UserLoginResponse | null {

    return this.currentUserSubject.getValue()

    // const userJson = localStorage.getItem(this.USER_KEY)
    // if (userJson) {
    //   const user: UserLoginResponse = {
    //     user: JSON.parse(userJson)
    //   }
    //   return user;
    // }
    // return null;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.getValue()
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    // this.currentUserSubject.next(null);
    // this.isAuthenticatedSubject.next(false);
  }
}
