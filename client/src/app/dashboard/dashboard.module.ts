import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { StudentAuthModule } from './student-auth/student-auth.module';
import { AdminAuthModule } from './admin-auth/admin-auth.module';
// import { StudentRegistrationComponent } from './student-auth/student-registration/student-registration.component';
@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   // StudentAuthModule,
    AdminAuthModule
  ]
})
export class DashboardModule { }
