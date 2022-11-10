import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  links:Object[] = []

  constructor(private service: CompanyService) { }

  ngOnInit(): void {

    this.links = this.service.getLinks

  }

}
