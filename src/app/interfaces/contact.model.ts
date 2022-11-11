import { RecClient } from "./company.model"
import { RecUser } from "./home.model"

export interface RecContact{
    id:number
    phone:string
    type:string
    client:RecClient
    user:RecUser
}