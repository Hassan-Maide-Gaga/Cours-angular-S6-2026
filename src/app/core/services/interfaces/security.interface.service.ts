import { InjectionToken } from "@angular/core";
import { UserLoginRequest, UserLoginResponse } from "@core/models";

export interface ISecurityService {
    login(userLoginRequest: UserLoginRequest): UserLoginResponse | null;
    logout(): void;
    getCurrentUser(): UserLoginResponse | null;
}

export const SECURITY_SERVICE_TOKEN = new InjectionToken<ISecurityService>('ISecurityService')