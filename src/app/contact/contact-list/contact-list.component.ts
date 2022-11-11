import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { RecContact } from 'src/app/interfaces/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: RecContact[] = []

  constructor(
    private service: ContactService,
    private homeService: HomeService
    ) { }

  ngOnInit(): void {

    this.getContactByClientId();

  }

  getContactByClientId(){
    this.homeService.findById(this.homeService.getUserId)
      .subscribe(user => {
        this.service.getContactByClientId(user.clientId)
          .subscribe(contacts => contacts.forEach(contact => this.contacts.push(contact)))
      })
  }

  setContact(id:number){
    localStorage.setItem('contact',String(id))
  }

}
