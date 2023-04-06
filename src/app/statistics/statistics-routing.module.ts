import { NgModule } from '@angular/core';
import { StatisticsComponent } from './statistics.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: StatisticsComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class StatisticsRoutingModule { }
