import { NgModule } from '@angular/core';
import { UsersManagementComponent } from './users-management.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UsersManagementComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class UsersManagementRoutingModule { }
