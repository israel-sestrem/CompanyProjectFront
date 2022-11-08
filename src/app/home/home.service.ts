import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class HomeService {

    localhost:string = 'http://localhost:8080'

    constructor(private http: HttpClient){}

    validateUser(userLogin:UserLogin): Observable<boolean>{
        return this.http.post<boolean>(`${this.localhost}/users/login`, userLogin)
    }

}

export interface UserLogin {
    email:string,
    password:string
}