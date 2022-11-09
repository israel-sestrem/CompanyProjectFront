import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class HomeService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient){}

    validateUser(userLogin:UserLogin): Observable<boolean>{
        return this.http.post<boolean>(`${this.baseUrl}/users/login`, userLogin)
    }

    signup(userSignup:UserSignup): Observable<boolean>{
        return this.http.post<boolean>(`${this.baseUrl}/users`, userSignup)
    }

}

export interface UserLogin {
    email:string,
    password:string
}

export interface UserSignup {
    name: string
    email: string
    password: string
}