import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {

  links:Object[] = []

  constructor(private service: CompanyService) { }

  ngOnInit(): void {

    this.links = this.service.getLinks

  }

}
