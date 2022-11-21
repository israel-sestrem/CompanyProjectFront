import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RecAddress, RecCep, SaveAddress, State } from "../interfaces/address.model";

@Injectable({providedIn:'root'})
export class AddressService{

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private route: Router){}

  getAddressById(id:string): Observable<RecAddress>{
    return this.http.get<RecAddress>(`${this.baseUrl}/addresses/${id}`)
  }

  getAddressByClientId(clientId:string): Observable<RecAddress[]>{
    return this.http.get<RecAddress[]>(`${this.baseUrl}/addresses/client/${clientId}`)
  };
  
  register(address:SaveAddress): Observable<boolean>{
    return this.http.post<boolean>(`${this.baseUrl}/addresses`, address)
  }

  edit(id:string, address:SaveAddress): Observable<boolean>{
    return this.http.put<boolean>(`${this.baseUrl}/addresses/${id}`, address)
  }

  delete(id:string): Observable<boolean>{
    return this.http.delete<boolean>(`${this.baseUrl}/addresses/${id}`)
  }  

  getAddressInfo(cep:string): Observable<RecCep>{
    return this.http.get<RecCep>(`https://viacep.com.br/ws/${cep}/json`)
  }

  getStatesNamesByInitials(sigla:string){
    let estados:State[] = [
      { sigla : 'AC', name : 'Acre' },
      { sigla : 'AL', name : 'Alagoas' },
      { sigla : 'AP', name : 'Amapá' },
      { sigla : 'AM', name : 'Amazonas' },
      { sigla : 'BA', name : 'Bahia' },
      { sigla : 'CE', name : 'Ceará' },
      { sigla : 'DF', name : 'Distrito Federal' },
      { sigla : 'ES', name : 'Espírito Santo' },
      { sigla : 'GO', name : 'Goiás' },
      { sigla : 'MA', name : 'Maranhão' },
      { sigla : 'MT', name : 'Mato Grosso' },
      { sigla : 'MS', name : 'Mato Grosso do Sul' },
      { sigla : 'MG', name : 'Minas Gerais' },
      { sigla : 'PA', name : 'Pará' },
      { sigla : 'PB', name : 'Paraíba' },
      { sigla : 'PR', name : 'Paraná' },
      { sigla : 'PE', name : 'Pernambuco' },
      { sigla : 'PI', name : 'Piauí' },
      { sigla : 'RJ', name : 'Rio de Janeiro' },
      { sigla : 'RN', name : 'Rio Grande do Norte' },
      { sigla : 'RS', name : 'Rio Grande do Sul' },
      { sigla : 'RO', name : 'Rondônia' },
      { sigla : 'RR', name : 'Roraima' },
      { sigla : 'SC', name : 'Santa Catarina' },
      { sigla : 'SP', name : 'São Paulo' },
      { sigla : 'SE', name : 'Sergipe' },
      { sigla : 'TO', name : 'Tocantins' }
    ];

    return estados.filter(state => state.sigla == sigla)[0].name
  }

}