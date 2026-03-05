export interface User{
    id: number;
    email: string;
    password: string;
    role: UserRole;
    fullName?: string;

}

type UserRole = 'PATIENT' | 'MEDECIN' | 'SECRETAIRE' | 'ADMIN';

export interface UserLoginRequest{
    email: string;
    password: string;
}
export interface UserLoginResponse{
    token?: string;
    user: User;
}