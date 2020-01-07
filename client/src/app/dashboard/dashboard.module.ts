import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
<<<<<<< HEAD
import { LoginComponent } from '../authentication/login/Login.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from '../authentication/registration/registration.component';
=======
import { LoginComponent } from '../authentication/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from '../authentication/registration/registration.component';

>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    RegistrationComponent
<<<<<<< HEAD

=======
>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    ReactiveFormsModule,
>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8
  ]
})
export class DashboardModule { }
