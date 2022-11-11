import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-removal',
  templateUrl: './address-removal.component.html',
  styleUrls: ['./address-removal.component.css']
})
export class AddressRemovalComponent implements OnInit {

  id = localStorage.getItem('address')

  constructor(private service: AddressService) { }

  ngOnInit(): void {

  }

}
