import { Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Select } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GalaxyState } from '../../../../app/+state/galaxy.state';
import { PlanetsFilters } from '../../../../app/shared/models/planets-filters';

@Component({
  selector: 'app-planets-filter-dialog',
  templateUrl: './planets-filter-dialog.component.html',
  styleUrls: ['./planets-filter-dialog.component.css']
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
