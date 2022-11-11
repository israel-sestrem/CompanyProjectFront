import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-registration',
  templateUrl: './contact-registration.component.html',
  styleUrls: ['./contact-registration.component.css']
})
export class ContactRegistrationComponent implements OnInit {

  constructor(private service: ContactService) { }

  ngOnInit(): void {

  }

}
