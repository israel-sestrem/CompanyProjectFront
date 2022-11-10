import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  links:Object[] = []

  constructor(private service: AddressService) { }

  ngOnInit(): void {

    this.links = this.service.getLinks

  }

}
