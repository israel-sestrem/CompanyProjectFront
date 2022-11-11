import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/home/home.service';
import { RecUser } from 'src/app/interfaces/home.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {

  user!:RecUser
  form!:FormGroup

  constructor(
    private service: CompanyService,
    private homeService: HomeService,
    private fb: FormBuilder,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
  
    this.getUser();
    this.createForm();
  
  }

  getUser(){
    this.homeService.findById(this.homeService.getUserId)
      .subscribe(user => this.user = user)
  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  registerClient(form:FormGroup){
    let name = form.value.name
    let email = form.value.email

    this.service.register({name, email})
      .subscribe(res => {
        if(res){
          this.toast.success('Empresa cadastrada com sucesso!')
        } else {
          this.toast.error('Houve um erro ao tentar cadastrar empresa.')
        }
      })
  }

}
