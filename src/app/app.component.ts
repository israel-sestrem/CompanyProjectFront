import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Company Project';

  @HostListener("window:beforeunload",["$event"])
  clearLocalStorage(){
      localStorage.clear();
  }
}
