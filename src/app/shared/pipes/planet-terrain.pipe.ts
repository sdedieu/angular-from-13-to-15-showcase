import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planetTerrain'
})
export class PlanetTerrainPipe implements PipeTransform {

  transform(value: string[] | 'unknown'): string {
    return value === 'unknown' ? 'unknown' : value.join(', ');
  }

}
