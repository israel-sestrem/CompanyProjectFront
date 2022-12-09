export interface UserLogin {
    email:string,
    password:string
}

export interface RecUserLogin {
    isValid:boolean,
    id:string
}

export interface UserSignup {
    name: string
    email: string
    password: string
    clientName: string
    clientEmail: string
}