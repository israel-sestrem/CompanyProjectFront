import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/home/home.service';
import { RecUser } from 'src/app/interfaces/user.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-atualization',
  templateUrl: './company-atualization.component.html',
  styleUrls: ['./company-atualization.component.css']
})
export class CompanyAtualizationComponent implements OnInit {

  id = localStorage.getItem('client')
  user:RecUser = {} as RecUser
  form!:FormGroup

  constructor(
    private service: CompanyService,
    private toast: ToastrService,
    private fb: FormBuilder,
    private route: Router,
    private homeService: HomeService
    ) { }

  ngOnInit(): void {

    this.getUser();
    this.getCompany();
    this.createForm();

  }

  getCompany(){
    this.service.getCompanyById(this.id!)
      .subscribe(res => {
        this.form.controls['name'].setValue(res.name)
        this.form.controls['email'].setValue(res.email)
      })
  }

  getUser(){
    this.homeService.findById(this.homeService.getUserId)
      .subscribe(user => this.user = user)
  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  editCompany(form:FormGroup){
    let name = form.value.name
    let email = form.value.email

    this.service.edit(this.id!,{name, email})
      .subscribe(res => {
        if(res){
          this.toast.success('Empresa editada com sucesso!')
          this.route.navigate(['/company'])
        } else {
          this.toast.error('Erro ao tentar editar empresa.')
        }
      })
  }

}
