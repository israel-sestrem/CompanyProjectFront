import { RecClient } from "./company.model";

export interface RecAddress{
    id:string
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
    client:{ id:string }
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

export interface RecCep{
    logradouro:string
    bairro:string
    localidade:string
    uf:string
}

export interface State{
    sigla:string
    name:string
}