import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [AdminLoginComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminAuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AdminLoginComponent, AdminDashboardComponent]
})
export class AdminAuthModule { }
