import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetPopulationPipe } from './pipes/planet-population.pipe';
import { PlanetTerrainPipe } from './pipes/planet-terrain.pipe';
import { PlanetClimatePipe } from './pipes/planet-climate.pipe';



@NgModule({
  declarations: [
    PlanetPopulationPipe,
    PlanetTerrainPipe,
    PlanetClimatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlanetPopulationPipe,
    PlanetTerrainPipe,
    PlanetClimatePipe
  ]
})
export class SharedModule { }
