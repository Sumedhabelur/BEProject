import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAuthRoutingModule } from './student-auth-routing.module';
import { StudentLoginComponent } from './student-login/student-login.component';


@NgModule({
  declarations: [StudentLoginComponent],
  imports: [
    CommonModule,
    StudentAuthRoutingModule
  ],
  exports: [StudentLoginComponent]
})
export class StudentAuthModule { }
