import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm!:FormGroup

  constructor(
      private fb: FormBuilder,
      private service: HomeService,
      private toast: ToastrService,
      private route: Router
    ) { }

  ngOnInit(): void {

    this.signUpForm = this.fb.group({
      userName : ['',Validators.required],
      email : ['',[Validators.email, Validators.required]],
      password : ['',Validators.required]
    })

  }

  signup(form: FormGroup) {

    let userName = form.value.userName
    let email = form.value.email
    let password = form.value.password

    this.service.signup({name: userName, email, password})
    .subscribe(res => {
      if(res){
        this.service.setUserLogged(res);
        this.route.navigate(['home'])
      } else {
        this.toast.error(
          "Ocorreu um erro no cadastro"
        )
      }
    })

  }

}
