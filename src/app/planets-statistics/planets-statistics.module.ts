import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsStatisticsComponent } from './planets-statistics.component';
import { PlanetsTableComponent } from './planets-table/planets-table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PlanetsStatisticsRoutingModule } from './planets-statistics-routing.module';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateNewPlanetDialogComponent } from './dialogs/create-new-planet-dialog/create-new-planet-dialog.component';
import { PlanetsFilterDialogComponent } from './dialogs/planets-filter-dialog/planets-filter-dialog.component'
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
