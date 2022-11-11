import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RecClient } from "../interfaces/company.model";

@Injectable({providedIn:'root'})
export class CompanyService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient, private route: Router){}

    getCompanyById(id:string): Observable<RecClient>{
        return this.http.get<RecClient>(`${this.baseUrl}/clients/${id}`)
    }

    // getCompanyAddresses(clientId:string):Observable<RecAddress[]>{
    //     return this.http.get<RecAddress[]>(`${this.baseUrl}/addresses/client/${clientId}`)
    // }

}