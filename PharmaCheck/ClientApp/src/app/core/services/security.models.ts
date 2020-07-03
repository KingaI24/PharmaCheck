export interface LoginModel {
    email: string;
    password: string;
}

export interface RegisterModel {
    firstname: string;
    lastname: string;
    phonenumber: string;
    email: string;
    password: string;
}

export interface Token {
    value: string;
    expiry: Date;
    email: string;
}
