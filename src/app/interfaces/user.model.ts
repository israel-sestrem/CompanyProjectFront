export interface RecUser {
    id:string
    clientId:string
    name:string
    password:string
    email:string
}

export interface SaveUser {
    email:string
    name:string
    password:string
    clientName:string
}

export interface UpdateUser {
    email:string
    name:string
    password:string
}