import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersManagementComponent } from './users-management.component';
import { UsersManagementRoutingModule } from './users-management-routing.module';



@NgModule({
  declarations: [
    UsersManagementComponent
  ],
  imports: [
    UsersManagementRoutingModule
  ]
})
export class UsersManagementModule { }
