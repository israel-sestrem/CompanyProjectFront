import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { RecAddress } from 'src/app/interfaces/address.model';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses:RecAddress[] = []

  constructor(
    private service: AddressService,
    private homeService: HomeService
    ) { }

  ngOnInit(): void {

    this.getAddressById();

  }

  getAddressById(){
    this.homeService.findById(this.homeService.getUserId)
      .subscribe(user => {
        this.service.getAddressByClientId(user.clientId)
          .subscribe(address => address.forEach(address => this.addresses.push(address)))
      })
  }

  setAddress(id:number){
    localStorage.setItem('address',String(id))
  }

}
