import { Component, OnInit } from '@angular/core';
import { RecFaq } from 'src/app/interfaces/faq.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faqs:RecFaq[] = []

  constructor(private service: HomeService) { }

  ngOnInit(): void {

    this.getFaqs()

  }

  getFaqs(){
    this.service.getFaqs()
      .subscribe(faqs => this.faqs = faqs)
  }

}
