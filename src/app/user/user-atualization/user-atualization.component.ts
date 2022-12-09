import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/home/home.service';
import { RecUser } from 'src/app/interfaces/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-atualization',
  templateUrl: './user-atualization.component.html',
  styleUrls: ['./user-atualization.component.css']
})
export class UserAtualizationComponent implements OnInit {

  id = localStorage.getItem('userEdit')
  user:RecUser = {} as RecUser
  form!:FormGroup

  constructor(
    private service: UserService,
    private toast: ToastrService,
    private fb: FormBuilder,
    private route: Router,
    private homeService: HomeService
    ) { }

  ngOnInit(): void {

    this.getUser();
    this.createForm();

  }

  getUser(){
    this.homeService.findById(this.id!)
      .subscribe(user => this.user = user)
  }

  createForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  editUser(form:FormGroup){
    let id = this.user.id
    let name = form.value.name
    let email = form.value.email
    let password = form.value.password

    this.service.edit(id,{name, email, password})
      .subscribe(res => {
        if(res){
          this.toast.success('Usuário editado com sucesso!')
          this.route.navigate(['/user'])
        } else {
          this.toast.error('Erro ao tentar editar usuário.')
        }
      })
  }

}
