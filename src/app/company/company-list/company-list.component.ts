import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/home/home.service';
import { RecClient } from 'src/app/interfaces/company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies:RecClient[] = []

  constructor(
    private service: CompanyService,
    private homeService: HomeService
    ) { }

  ngOnInit(): void {

    this.getCompanyById()

  }

  getCompanyById(){
    this.homeService.findById(this.homeService.getUserId)
      .subscribe(user => {
        this.service.getCompanyById(user.clientId)
          .subscribe(company => this.companies.push(company))
      })
  }

  setCompany(id:number){
    localStorage.setItem('client', String(id))
  }

}
