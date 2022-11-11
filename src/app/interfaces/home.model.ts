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

export interface RecUser {
    id:number
    clientId:string
    name:string
    password:string
    email:string
}