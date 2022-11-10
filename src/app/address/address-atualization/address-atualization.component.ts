import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-address-atualization',
  templateUrl: './address-atualization.component.html',
  styleUrls: ['./address-atualization.component.css']
})
export class AddressAtualizationComponent implements OnInit {

  links:Object[] = []

  constructor(private service: AddressService) { }

  ngOnInit(): void {

    this.links = this.service.getLinks

  }

}
