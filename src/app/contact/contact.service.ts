import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class ContactService {

    get getLinks(){
        return [
            {
                link:"/contact",
                name:"Contatos"
            },
            {
                link:"/contact/atualization",
                name:"Editar"
            },
            {
                link:"/contact/registration",
                name:"Cadastrar"
            },
            {
                link:"/contact/removal",
                name:"Deletar"
            }
        ]
    }

}