import { RecClient } from "./company.model";

export interface RecAddress{
    id:number
    client:RecClient
    branch:string
    cnpj:string
    address:string
    number:number
    complement:string
    neighborhood:string
    zipCode:string
    state:string
    city:string
}

export interface SaveAddress{
    client:{ id:number }
    branch:string
    cnpj:string
    address:string
    number:number
    complement:string
    neighborhood:string
    zipCode:string
    state:string
    city:string
}