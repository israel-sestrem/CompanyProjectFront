import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-atualization',
  templateUrl: './contact-atualization.component.html',
  styleUrls: ['./contact-atualization.component.css']
})
export class ContactAtualizationComponent implements OnInit {

  links:Object[] = []

  constructor(private service: ContactService) { }

  ngOnInit(): void {

    this.links = this.service.getLinks

  }

}
