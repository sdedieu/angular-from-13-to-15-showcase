import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
    { path: 'statistics', loadChildren: async () => (await import('./planets-statistics/planets-statistics.module')).PlanetsStatisticsModule },
    { path: 'forbidden', component: ForbiddenComponent },
    { path: '', redirectTo: 'statistics', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
