import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  links:Object[] = []

  constructor(private service: ContactService) { }

  ngOnInit(): void {

    this.links = this.service.getLinks

  }

}
