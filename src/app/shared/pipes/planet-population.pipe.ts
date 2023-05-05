import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'planetPopulation',
    standalone: true
})
export class PlanetPopulationPipe implements PipeTransform {

  transform(value: string): string {
    if(value === 'unknown')
      return value;
    else {
      const populationInBillion = parseFloat(value) / 1000000000;
      return `${populationInBillion} B`
    }
  }

}
