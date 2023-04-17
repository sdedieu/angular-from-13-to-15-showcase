import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, first, map } from 'rxjs';
import { PlanetDto } from '../models/planet';


export class PlanetNameValidator {

    static createValidator(planets$: Observable<PlanetDto[]>): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
        return planets$
          .pipe(
            map(planets =>
              planets.find((p: PlanetDto) => p.name.toLocaleUpperCase() === control.value.toLocaleUpperCase()) ? { planetNameAlreadyExists: true } : null
            ),
            first()
          );
      };
    }
  }