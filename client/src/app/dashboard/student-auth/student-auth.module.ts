import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAuthRoutingModule } from './student-auth-routing.module';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';


@NgModule({
  declarations: [StudentLoginComponent, StudentRegistrationComponent],
  imports: [
    CommonModule,
    StudentAuthRoutingModule
  ],
  exports: [StudentLoginComponent, StudentRegistrationComponent]
})
export class StudentAuthModule { }
