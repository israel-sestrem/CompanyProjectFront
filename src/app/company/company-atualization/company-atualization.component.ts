import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-atualization',
  templateUrl: './company-atualization.component.html',
  styleUrls: ['./company-atualization.component.css']
})
export class CompanyAtualizationComponent implements OnInit {

  id = localStorage.getItem('client')

  constructor(private service: CompanyService) { }

  ngOnInit(): void {

  }

}
