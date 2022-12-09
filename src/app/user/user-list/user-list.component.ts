import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecUser } from 'src/app/interfaces/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users:RecUser[] = [];

  constructor(
    private service: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.getUsersByClientId()

  }

  getUsersByClientId(): void {
    this.service.getAllUsersByClientId(localStorage.getItem('client')!)
      .subscribe(res => this.users = res)
  }

  setUser(userId: string) {
    localStorage.setItem('userEdit',userId)
  }

}
