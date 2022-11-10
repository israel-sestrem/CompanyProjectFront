import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() links:any[] = []

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  deslogar(){
    this.homeService.deslogar()
  }

}
