import { AfterContentChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AddPlanet, GalaxyState, RemovePlanet, UpdatePlanetsFilters } from '../+state/galaxy.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Planet } from '../shared/models/planet';
import { MatLegacyDialog as MatDialog, MatLegacyDialogConfig as MatDialogConfig } from '@angular/material/legacy-dialog';
import { CreateNewPlanetDialogComponent } from './dialogs/create-new-planet-dialog/create-new-planet-dialog.component';
import { PlanetsFilterDialogComponent } from './dialogs/planets-filter-dialog/planets-filter-dialog.component';
import { PlanetsFilters } from '../shared/models/planets-filters';
import { PlanetsTableComponent } from './planets-table/planets-table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { NgIf, AsyncPipe } from '@angular/common';
import { PlanetsGraphComponent } from './planets-graph/planets-graph.component';

const dialogConfig: MatDialogConfig = {
  width: '75%'
}

@Component({
    selector: 'app-planets-statistics',
    templateUrl: './planets-statistics.component.html',
    styleUrls: ['./planets-statistics.component.css'],
    standalone: true,
    imports: [PlanetsGraphComponent, NgIf, MatLegacyProgressSpinnerModule, MatLegacyButtonModule, MatIconModule, PlanetsTableComponent, AsyncPipe]
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
