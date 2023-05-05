import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetPopulationPipe } from './pipes/planet-population.pipe';
import { PlanetTerrainPipe } from './pipes/planet-terrain.pipe';
import { PlanetClimatePipe } from './pipes/planet-climate.pipe';



@NgModule({
    imports: [
        CommonModule,
        PlanetPopulationPipe,
        PlanetTerrainPipe,
        PlanetClimatePipe
    ],
    exports: [
        PlanetPopulationPipe,
        PlanetTerrainPipe,
        PlanetClimatePipe
    ]
})
export class SharedModule { }
