import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-registration',
  templateUrl: './address-registration.component.html',
  styleUrls: ['./address-registration.component.css']
})
export class AddressRegistrationComponent implements OnInit {

  constructor(private service: AddressService) { }

  ngOnInit(): void {

  }

}
