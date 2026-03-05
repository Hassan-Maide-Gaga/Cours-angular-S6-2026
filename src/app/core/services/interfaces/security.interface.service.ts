import { InjectionToken } from "@angular/core";
import { UserLoginRequest, UserLoginResponse } from "../../models/user.model";

export interface ISecurityService {
    login(userLoginRequest: UserLoginRequest): UserLoginResponse | null;
    logout(): void;
    getCurrentUser(): UserLoginResponse | null;
}

export const SECURITY_SERVICE_TOKEN = new InjectionToken<ISecurityService>('ISecurityService')