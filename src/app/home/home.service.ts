import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class HomeService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient, private route: Router){}

    validateUser(userLogin:UserLogin): Observable<RecUserLogin>{
        return this.http.post<RecUserLogin>(`${this.baseUrl}/users/login`, userLogin)
    }

    signup(userSignup:UserSignup): Observable<string>{
        return this.http.post<string>(`${this.baseUrl}/users`, userSignup)
    }

    deslogar(){
        localStorage.clear();
        this.route.navigate(['/'])
    }

    setUserLogged(userId:string){
        localStorage.setItem('user', userId)
    }

    get getUserLogged(){
        let userId = localStorage.getItem('user')
        return userId ? userId : null;
    }

    get getLinks(){
        return [
            {
                link:"/company",
                name:"Empresa"
            },
            {
                link:"/address",
                name:"Endereço"
            },
            {
                link:"/contact",
                name:"Contato"
            }
        ]
    }

}

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