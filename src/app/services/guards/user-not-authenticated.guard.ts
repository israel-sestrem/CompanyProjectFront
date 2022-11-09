import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';

@Injectable({
  providedIn: 'root'
})
export class UserNotAuthenticatedGuard implements CanActivate {
  
  constructor(private service: HomeService, private route: Router){}
  
  canActivate(){
    if(this.service.getUserLogged){
      this.route.navigate(['home'])
      return false;   
    }
    return true;
  }
  
}
