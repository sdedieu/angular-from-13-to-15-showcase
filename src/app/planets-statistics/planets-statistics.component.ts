import { AfterContentChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AddPlanet, GalaxyState, RemovePlanet, UpdatePlanetsFilters } from '../+state/galaxy.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Planet } from '../shared/models/planet';
import { MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';
import { CreateNewPlanetDialogComponent } from './dialogs/create-new-planet-dialog/create-new-planet-dialog.component';
import { PlanetsFilterDialogComponent } from './dialogs/planets-filter-dialog/planets-filter-dialog.component';
import { PlanetsFilters } from '../shared/models/planets-filters';

const dialogConfig: MatDialogConfig = {
  width: '75%'
}

@Component({
  selector: 'app-planets-statistics',
  templateUrl: './planets-statistics.component.html',
  styleUrls: ['./planets-statistics.component.css']
})
export class PlanetsStatisticsComponent implements OnInit {

  @Select(GalaxyState.filteredPlanets) planets$: Observable<Planet[]>;
  @Select(GalaxyState.populatedPlanets) populatedPlanets$: Observable<Planet[]>;
  @Select(GalaxyState.planetsLoading) planetsLoading$: Observable<boolean>;

  constructor(private dialog: MatDialog, private store: Store) {}

  ngOnInit(): void {
    
  }

  removePlanet(planet: Planet) {
    this.store.dispatch(new RemovePlanet(planet));
  }

  openCreateNewPanetDialog() {
    const dialogRef = this.dialog.open(CreateNewPlanetDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(planet => {
      if(planet)
        this.store.dispatch(new AddPlanet(planet));
    });
  }

  openPanetsFilterDialog() {
    const dialogRef = this.dialog.open(PlanetsFilterDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(filters => {
      if(filters)
        this.store.dispatch(new UpdatePlanetsFilters(filters));
    });
  }

}
