import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-removal',
  templateUrl: './contact-removal.component.html',
  styleUrls: ['./contact-removal.component.css']
})
export class ContactRemovalComponent implements OnInit {

  id = localStorage.getItem('contact')

  constructor(private service: ContactService) { }

  ngOnInit(): void {

  }

}
