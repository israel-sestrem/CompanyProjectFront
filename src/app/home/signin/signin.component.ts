import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../home.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private fb: FormBuilder, private service: HomeService) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email : ['',[Validators.email, Validators.required]],
      password: ['',Validators.required]
    })

  }

  public login(form: FormGroup){
    let email = form.value.email;
    let password = form.value.password;
    console.log(email);
    console.log(password);
    
    
     this.service.validateUser({email, password})
     .subscribe(res=>{
      console.log(res);
      
     })
  }

}
