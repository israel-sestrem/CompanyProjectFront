import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/company/company.service';
import { HomeService } from 'src/app/home/home.service';
import { RecClient } from 'src/app/interfaces/company.model';
import { RecUser } from 'src/app/interfaces/home.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-atualization',
  templateUrl: './contact-atualization.component.html',
  styleUrls: ['./contact-atualization.component.css']
})
export class ContactAtualizationComponent implements OnInit {

  id = localStorage.getItem('contact')
  user:RecUser = {} as RecUser
  client:RecClient = {} as RecClient
  form!:FormGroup

  constructor(
    private service: ContactService,
    private homeService: HomeService,
    private companyService: CompanyService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private route: Router
    ) { }

  ngOnInit(): void {
  
    this.getContact();
    this.getData();
    this.createForm();
  
  }

  getContact(){
    this.service.getContactById(this.id!)
      .subscribe(res => {
        this.form.controls['phone'].setValue(res.phone)
        this.form.controls['type'].setValue(res.type)
      })
  }

  getData(){
    this.homeService.findById(this.homeService.getUserId)
      .subscribe(user => {
        this.user = user
        this.companyService.getCompanyById(user.clientId)
          .subscribe(client => this.client = client)
      })
  }

  createForm(){
    this.form = this.fb.group({
      phone: ['', Validators.required],
      type: ['', Validators.required]
    })
  }

  editContact(form:FormGroup){
    let client = {id:this.client.id}
    let user = {id:this.user.id}
    let phone = form.value.phone
    let type = form.value.type

    this.service.edit(this.id!, {type, phone, client, user})
      .subscribe(res => {
        if(res){
          this.toast.success('Contato editado com sucesso!')
          this.route.navigate(['/contact'])
        } else {
          this.toast.error('Houve um erro ao tentar editar contato.')
        }
      })
  }

}
