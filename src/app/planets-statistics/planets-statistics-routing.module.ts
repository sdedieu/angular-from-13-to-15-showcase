import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PlanetsStatisticsComponent } from './planets-statistics.component';

const routes: Routes = [
    { path: '', component: PlanetsStatisticsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PlanetsStatisticsRoutingModule { }
