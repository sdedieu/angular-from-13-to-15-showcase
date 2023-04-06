import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'statistics', loadChildren: async () => (await import('./statistics/statistics.module')).StatisticsModule },
    { path: 'users-management', loadChildren: async () => (await import('./users-management/users-management.module')).UsersManagementModule },
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
