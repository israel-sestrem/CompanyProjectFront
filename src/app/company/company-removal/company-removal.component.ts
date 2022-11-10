import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-removal',
  templateUrl: './company-removal.component.html',
  styleUrls: ['./company-removal.component.css']
})
export class CompanyRemovalComponent implements OnInit {

  links:Object[] = []

  constructor(private service: CompanyService) { }

  ngOnInit(): void {

    this.links = this.service.getLinks

  }

}
