import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RecFaq } from "../interfaces/faq.model";
import { RecUserLogin, UserLogin, UserSignup } from "../interfaces/home.model";
import { RecUser } from "../interfaces/user.model";

@Injectable({providedIn:'root'})
export class HomeService {

    baseUrl = environment.baseUrl;

    constructor(
        private http: HttpClient, 
        private route: Router
        ){}

    validateUser(userLogin:UserLogin): Observable<RecUserLogin>{
        return this.http.post<RecUserLogin>(`${this.baseUrl}/users/login`, userLogin)
    }

    signup(userSignup:UserSignup): Observable<string>{
        return this.http.post<string>(`${this.baseUrl}/users`, userSignup)
    }

    findById(userId:string): Observable<RecUser>{
        return this.http.get<RecUser>(`${this.baseUrl}/users/${userId}`)
    }

    existsUser(userId:string): Observable<boolean>{
        return this.http.get<boolean>(`${this.baseUrl}/users/exists/${userId}`)
    }

    getFaqs(): Observable<RecFaq[]>{
        return this.http.get<RecFaq[]>(`${this.baseUrl}/faq`)
    }

    deslogar(){
        localStorage.clear();
        this.route.navigate(['/'])
    }

    setUserLogged(userId:string){
        localStorage.setItem('user', userId)
        this.findById(userId)
            .subscribe(user => localStorage.setItem('client', user.clientId))
    }

    get getUserLogged(){
        let userId = localStorage.getItem('user')
        return userId ? userId : null;
    }

    get getUserId(){
        return JSON.parse(localStorage.getItem('user')!)
    }

}