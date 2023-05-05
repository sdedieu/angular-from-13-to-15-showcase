import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MatLegacyDialogModule } from '@angular/material/legacy-dialog';
import { Select } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GalaxyState } from '../../../../app/+state/galaxy.state';
import { PlanetsFilters } from '../../../../app/shared/models/planets-filters';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyOptionModule } from '@angular/material/legacy-core';
import { NgFor, AsyncPipe, TitleCasePipe } from '@angular/common';
import { MatLegacySelectModule } from '@angular/material/legacy-select';
import { MatLegacyFormFieldModule } from '@angular/material/legacy-form-field';

@Component({
    selector: 'app-planets-filter-dialog',
    templateUrl: './planets-filter-dialog.component.html',
    styleUrls: ['./planets-filter-dialog.component.css'],
    standalone: true,
    imports: [MatLegacyDialogModule, ReactiveFormsModule, MatLegacyFormFieldModule, MatLegacySelectModule, NgFor, MatLegacyOptionModule, MatIconModule, MatLegacyButtonModule, AsyncPipe, TitleCasePipe]
})
export class PlanetsFilterDialogComponent implements OnInit, OnDestroy {

  @Select(GalaxyState.climates) climateList$: Observable<string[]>;
  @Select(GalaxyState.terrains) terrainList$: Observable<string[]>;
  @Select(GalaxyState.filters) planetsFilter$: Observable<PlanetsFilters>;

  planetFilterForm: UntypedFormGroup;

  destroy$ = new Subject<void>();

  constructor(private dialogRef: MatDialogRef<PlanetsFilterDialogComponent>) {
    this.planetFilterForm = new UntypedFormGroup({
      climates: new UntypedFormControl([]),
      terrains: new UntypedFormControl([]),
    })

  }

  ngOnInit(): void {
    this.planetsFilter$
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        filters => {
          this.planetFilterForm.get('climates').setValue(filters.climates)
          this.planetFilterForm.get('terrains').setValue(filters.terrains)
        }
      )
  }

  applyFilter() {
    const filters: PlanetsFilters = {
      ...this.planetFilterForm.value
    };
    
    this.dialogRef.close(filters)
  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }
}
