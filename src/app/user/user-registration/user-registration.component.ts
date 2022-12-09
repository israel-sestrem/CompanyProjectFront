import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/company/company.service';
import { RecClient } from 'src/app/interfaces/company.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  client!:RecClient
  form!:FormGroup

  constructor(
    private service: UserService,
    private clientService: CompanyService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private route: Router
    ) { }

  ngOnInit(): void {
  
    this.getClient();
    this.createForm();
  
  }

  getClient(){
    this.clientService.getCompanyById(localStorage.getItem("client")!)
      .subscribe(client => this.client = client)
  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      clientName: ['']
    })
  }

  registerUser(form:FormGroup){
    let name = form.value.name
    let email = form.value.email
    let password = form.value.password
    let clientName = form.value.clientName

    this.service.register({name, email, password, clientName})
      .subscribe(res => {
        if(res){
          this.toast.success('Usuário cadastrado com sucesso!')
          this.route.navigate(['/user'])
        } else {
          this.toast.error('Houve um erro ao tentar cadastrar usuário.')
        }
      })
  }
}
