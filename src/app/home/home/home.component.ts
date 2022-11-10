import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  links:Object[] = []

  constructor(private service: HomeService) { }

  ngOnInit(): void {

    this.links = this.service.getLinks

  }

  deslogar(){
    this.service.deslogar();
  }

}
