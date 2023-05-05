import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadPlanets } from './+state/galaxy.state';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatLegacyListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [MatToolbarModule, MatLegacyButtonModule, MatIconModule, MatSidenavModule, MatLegacyListModule, NgFor, RouterLink, RouterOutlet]
})
export class AppComponent {

  navs = [
    { label: 'Statistics', route: 'statistics' }
  ]

  constructor(private store: Store) {
    this.store.dispatch(new LoadPlanets());
  }

}
