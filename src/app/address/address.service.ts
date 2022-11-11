import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RecAddress, SaveAddress } from "../interfaces/address.model";

@Injectable({providedIn:'root'})
export class AddressService{

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private route: Router){}

  getAddressByClientId(clientId:string): Observable<RecAddress[]>{
    return this.http.get<RecAddress[]>(`${this.baseUrl}/addresses/client/${clientId}`)
  };
  
  register(address:SaveAddress): Observable<boolean>{
    return this.http.post<boolean>(`${this.baseUrl}/addresses`, address)
  }

}