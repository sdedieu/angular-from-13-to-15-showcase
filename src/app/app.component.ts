import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navs = [
    { label: 'Statistics', route: 'statistics' },
    { label: 'Users Management', route: 'users-management' }
  ]

  constructor() {
  }

}
