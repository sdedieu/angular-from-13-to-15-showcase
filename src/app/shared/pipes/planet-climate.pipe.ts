import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'planetClimate',
    standalone: true
})
export class PlanetClimatePipe implements PipeTransform {

  transform(value: string[] | 'unknown'): string {
    return value === 'unknown' ? 'unknown' : value.join(', ');
  }

}
