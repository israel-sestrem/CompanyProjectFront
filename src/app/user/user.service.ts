import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RecUser, SaveUser, UpdateUser } from "../interfaces/user.model";

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

    edit(id:string, user: UpdateUser): Observable<boolean>{
        return this.http.put<boolean>(`${this.baseUrl}/users/${id}`, user)
    }

    delete(id:string): Observable<boolean>{
        return this.http.delete<boolean>(`${this.baseUrl}/users/${id}`)
    }

}