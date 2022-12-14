import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RecContact, SaveContact } from "../interfaces/contact.model";

@Injectable({providedIn:'root'})
export class ContactService {

    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient){}

    getContactByClientId(clientId:string): Observable<RecContact[]>{
        return this.http.get<RecContact[]>(`${this.baseUrl}/contacts/client/${clientId}`)
    }

    registerContact(contact:SaveContact): Observable<boolean>{
        return this.http.post<boolean>(`${this.baseUrl}/contacts`, contact)
    }

    edit(id:string, contact:SaveContact): Observable<boolean>{
        return this.http.put<boolean>(`${this.baseUrl}/contacts/${id}`, contact)
    }

    delete(id:string): Observable<boolean>{
        return this.http.delete<boolean>(`${this.baseUrl}/contacts/${id}`)
    }

    getContactById(id:string): Observable<RecContact>{
        return this.http.get<RecContact>(`${this.baseUrl}/contacts/${id}`)
    }

}