import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from 'src/app/home/home.service';
import { RecUser } from 'src/app/interfaces/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-removal',
  templateUrl: './user-removal.component.html',
  styleUrls: ['./user-removal.component.css']
})
export class UserRemovalComponent implements OnInit {

  id = localStorage.getItem('userEdit')
  user: RecUser = {} as RecUser

  constructor(
    private homeService: HomeService,
    private service: UserService,
    private toast: ToastrService,
    private route: Router
    ) { }

  ngOnInit(): void {

    this.getUser();

  }

  getUser(){
    this.homeService.findById(this.id!)
      .subscribe(user => this.user = user)
  }

  deleteUser(){
    this.service.delete(this.id!)
      .subscribe(res => {
        if(res){
          this.toast.success('Usuário removido com sucesso!')
          if(localStorage.getItem('user') == this.id){
            this.homeService.deslogar();
          } else {
            this.route.navigate(['/user']);
          }
        } else {
          this.toast.error('Erro ao tentar remover usuário')
        }
      })
  }

}
