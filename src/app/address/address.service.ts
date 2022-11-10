import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class AddressService{

    get getLinks(){
        return [
            {
              link:"/address",
              name:"Endereços"
            },
            {
              link:"/address/atualization",
              name:"Editar"
            },
            {
              link:"/address/registration",
              name:"Cadastrar"
            },
            {
              link:"/address/removal",
              name:"Deletar"
            }
        ]
    }

}