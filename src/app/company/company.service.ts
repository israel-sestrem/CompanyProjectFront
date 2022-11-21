import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RecClient, SaveClient } from "../interfaces/company.model";

@Injectable({providedIn:'root'})
export class CompanyService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient, private route: Router){}

    getCompanyById(id:string): Observable<RecClient>{
        return this.http.get<RecClient>(`${this.baseUrl}/clients/${id}`)
    }

    register(client:SaveClient): Observable<boolean>{
        return this.http.post<boolean>(`${this.baseUrl}/clients`, client)
    }

    edit(id:string, client:SaveClient): Observable<boolean>{
        return this.http.put<boolean>(`${this.baseUrl}/clients/${id}`, client)
    }

    // delete(id:string): Observable<boolean>{
    //     return this.http.delete<boolean>(`${this.baseUrl}/clients/${id}`)
    // }

}