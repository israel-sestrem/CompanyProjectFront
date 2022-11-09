import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(
    private fb: FormBuilder, 
    private service: HomeService,
    private route: Router,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email : ['',[Validators.email, Validators.required]],
      password: ['',Validators.required]
    })

  }

  public login(form: FormGroup){
    let email = form.value.email;
    let password = form.value.password;
    
    this.service.validateUser({email, password})
     .subscribe(res=>{
      if(res.isValid){
        this.service.setUserLogged(res.id)
        this.route.navigate(['home'])
      } else {
        this.toast.error(
          "Credenciais inválidas!"
        )
      }
    })
  }

}
