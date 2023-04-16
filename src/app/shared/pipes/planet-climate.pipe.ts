import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planetClimate'
})
export class PlanetClimatePipe implements PipeTransform {

  transform(value: string[] | 'unknown'): string {
    return value === 'unknown' ? 'unknown' : value.join(', ');
  }

}
