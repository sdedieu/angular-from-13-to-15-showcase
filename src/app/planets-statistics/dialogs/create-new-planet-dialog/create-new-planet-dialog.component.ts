import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GalaxyState } from 'src/app/+state/galaxy.state';
import { Planet, PlanetDto } from 'src/app/shared/models/planet';
import { PlanetNameValidator } from 'src/app/shared/validators/planet-name.validator';

@Component({
  selector: 'app-create-new-planet-dialog',
  templateUrl: './create-new-planet-dialog.component.html',
  styleUrls: ['./create-new-planet-dialog.component.css']
})
export class CreateNewPlanetDialogComponent implements OnInit {

  @Select(GalaxyState.climates) climateList$: Observable<string[]>;
  @Select(GalaxyState.terrains) terrainList$: Observable<string[]>;
  @Select(GalaxyState.planets) planets$: Observable<PlanetDto[]>;

  newPlanetForm: FormGroup;

  get getErrorMessage(): string {
    if (this.newPlanetForm.get('name').hasError('required'))
      return 'The planet name is required'
    if (this.newPlanetForm.get('name').hasError('planetNameAlreadyExists'))
      return 'This name already exists'
    return '';
  }

  constructor(private dialogRef: MatDialogRef<CreateNewPlanetDialogComponent>) {
    this.newPlanetForm = new FormGroup({
      name: new FormControl('',
        [Validators.required],
        [PlanetNameValidator.createValidator(this.planets$)]
      ),
      population: new FormControl(null),
      diameter: new FormControl(null),
      rotation_period: new FormControl(null),
      gravity: new FormControl(null),
      climate: new FormControl([]),
      terrain: new FormControl([])
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
