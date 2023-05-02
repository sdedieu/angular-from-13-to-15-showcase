import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GalaxyState } from '../../../../app/+state/galaxy.state';
import { Planet, PlanetDto } from '../../../../app/shared/models/planet';
import { PlanetNameValidator } from '../../../../app/shared/validators/planet-name.validator';

@Component({
  selector: 'app-create-new-planet-dialog',
  templateUrl: './create-new-planet-dialog.component.html',
  styleUrls: ['./create-new-planet-dialog.component.css']
})
export class CreateNewPlanetDialogComponent implements OnInit {

  @Select(GalaxyState.climates) climateList$: Observable<string[]>;
  @Select(GalaxyState.terrains) terrainList$: Observable<string[]>;
  @Select(GalaxyState.planets) planets$: Observable<PlanetDto[]>;

  newPlanetForm: UntypedFormGroup;

  get getErrorMessage(): string {
    if (this.newPlanetForm.get('name').hasError('required'))
      return 'The planet name is required'
    if (this.newPlanetForm.get('name').hasError('planetNameAlreadyExists'))
      return 'This name already exists'
    return '';
  }

  constructor(private dialogRef: MatDialogRef<CreateNewPlanetDialogComponent>) {
    this.newPlanetForm = new UntypedFormGroup({
      name: new UntypedFormControl('',
        [Validators.required],
        [PlanetNameValidator.createValidator(this.planets$)]
      ),
      population: new UntypedFormControl(null),
      diameter: new UntypedFormControl(null),
      rotation_period: new UntypedFormControl(null),
      gravity: new UntypedFormControl(null),
      climate: new UntypedFormControl([]),
      terrain: new UntypedFormControl([])
    })

  }

  ngOnInit(): void {
  }

  create() {
    const newPlanet: Planet = {
      ...this.newPlanetForm.value,
      name: this.newPlanetForm.value.name.toLowerCase(),
      population: this.newPlanetForm.value.population ? this.newPlanetForm.value.population * 1000000000 : 'unknown',
      diameter: this.newPlanetForm.value.diameter ?? 'unknown',
      rotation_period: this.newPlanetForm.value.population ?? 'unknown',
      gravity: this.newPlanetForm.value.gravity ?? 'unknown',
      climate: this.newPlanetForm.value.climate.length ? this.newPlanetForm.value.climate : 'unknown',
      terrain: this.newPlanetForm.value.terrain.length ? this.newPlanetForm.value.terrain : 'unknown'
    };
    this.dialogRef.close(newPlanet)
  }

}
