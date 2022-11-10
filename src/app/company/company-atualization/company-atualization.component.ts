import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-atualization',
  templateUrl: './company-atualization.component.html',
  styleUrls: ['./company-atualization.component.css']
})
export class CompanyAtualizationComponent implements OnInit {

  links:Object[] = []

  constructor(private service: CompanyService) { }

  ngOnInit(): void {

    this.links = this.service.getLinks

  }

}
