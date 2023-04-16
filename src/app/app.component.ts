import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadPlanets } from './+state/galaxy.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navs = [
    { label: 'Statistics', route: 'statistics' }
  ]

  constructor(private store: Store) {
    this.store.dispatch(new LoadPlanets());
  }

}
