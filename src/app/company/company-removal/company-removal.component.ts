import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-removal',
  templateUrl: './company-removal.component.html',
  styleUrls: ['./company-removal.component.css']
})
export class CompanyRemovalComponent implements OnInit {
  
  id = localStorage.getItem('client')

  constructor(private service: CompanyService) { }

  ngOnInit(): void {
  }

}
