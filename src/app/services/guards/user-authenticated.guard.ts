import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticatedGuard implements CanActivate {
  
  constructor(private service: HomeService, private route: Router){}
  
  canActivate(){
    if(this.service.getUserLogged){
      return true;
    }
    this.route.navigate([''])
    return false;
  }
  
}
