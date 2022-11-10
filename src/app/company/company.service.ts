import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class CompanyService {

    get getLinks(){
        return [
            {
                link:"/company",
                name:"Empresas"
            },
            {
                link:"/company/atualization",
                name:"Editar"
            },
            {
                link:"/company/registration",
                name:"Cadastrar"
            },
            {
                link:"/company/removal",
                name:"Deletar"
            }
        ]
    }

}