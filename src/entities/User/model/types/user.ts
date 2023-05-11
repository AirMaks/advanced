export interface User {
    id: number;
    email: string;
    token: string;
}

export interface UserSchema {
    authData?: User;
}
