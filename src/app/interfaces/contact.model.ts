import { RecClient } from "./company.model"
import { RecUser } from "./user.model"
export interface RecContact{
    id:string
    phone:string
    type:string
    client:RecClient
    user:RecUser
}

export interface SaveContact{
    type:string
    phone:string
    user:{ id:string }
    client:{ id:string }
}