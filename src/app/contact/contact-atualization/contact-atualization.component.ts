import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-atualization',
  templateUrl: './contact-atualization.component.html',
  styleUrls: ['./contact-atualization.component.css']
})
export class ContactAtualizationComponent implements OnInit {

  id = localStorage.getItem('contact')

  constructor(private service: ContactService) { }

  ngOnInit(): void {

  }

}
