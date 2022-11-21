import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RecContact } from 'src/app/interfaces/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-removal',
  templateUrl: './contact-removal.component.html',
  styleUrls: ['./contact-removal.component.css']
})
export class ContactRemovalComponent implements OnInit {

  id = localStorage.getItem('contact')
  contact: RecContact = {} as RecContact

  constructor(
    private service: ContactService,
    private toast: ToastrService,
    private route: Router
    ) { }

  ngOnInit(): void {

    this.getContact();

  }

  getContact(){
    this.service.getContactById(this.id!)
      .subscribe(res => this.contact = res)
  }

  deleteContact(){
    this.service.delete(this.id!)
      .subscribe(res => {
        if(res){
          this.toast.success('Contato removido com sucesso!')
          this.route.navigate(['/contact']);
        } else {
          this.toast.error('Erro ao tentar remover contato')
        }
      })
  }

}
