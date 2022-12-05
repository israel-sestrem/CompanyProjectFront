import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RecUser } from "../interfaces/home.model";
import { SaveUser } from "../interfaces/user.model";

@Injectable({providedIn:'root'})
export class UserService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient){}

    getAllUsersByClientId(clientId:string): Observable<RecUser[]>{
        return this.http.get<RecUser[]>(`${this.baseUrl}/users/client/${clientId}`)
    }

    register(user: SaveUser): Observable<string>{
        return this.http.post<string>(`${this.baseUrl}/users`, user)
    }

}