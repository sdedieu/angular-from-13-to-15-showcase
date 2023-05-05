import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsStatisticsComponent } from './planets-statistics.component';
import { PlanetsTableComponent } from './planets-table/planets-table.component';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { PlanetsStatisticsRoutingModule } from './planets-statistics-routing.module';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { SharedModule } from '../shared/shared.module';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { CreateNewPlanetDialogComponent } from './dialogs/create-new-planet-dialog/create-new-planet-dialog.component';
import { PlanetsFilterDialogComponent } from './dialogs/planets-filter-dialog/planets-filter-dialog.component'
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanetsGraphComponent } from './planets-graph/planets-graph.component';



@NgModule({
  declarations: [
    PlanetsStatisticsComponent,
    PlanetsTableComponent,
    CreateNewPlanetDialogComponent,
    PlanetsFilterDialogComponent,
    PlanetsGraphComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PlanetsStatisticsRoutingModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class PlanetsStatisticsModule { }
