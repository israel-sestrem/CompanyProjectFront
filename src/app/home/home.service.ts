import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RecUser, RecUserLogin, UserLogin, UserSignup } from "../interfaces/home.model";

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

    findById(userId:string): Observable<RecUser>{
        return this.http.get<RecUser>(`${this.baseUrl}/users/${userId}`)
    }

    existsUser(userId:string): Observable<boolean>{
        return this.http.get<boolean>(`${this.baseUrl}/users/exists/${userId}`)
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

    get getUserId(){
        return JSON.parse(localStorage.getItem('user')!)
    }

}