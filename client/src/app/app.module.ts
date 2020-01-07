import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { ForgotpasswordComponent } from './authentication/forgotpassword/forgotpassword.component';
import { ResetComponent } from './authentication/reset/reset.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { ProfessorCreateComponent } from './professor/professor-create/professor-create.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { ProfessorUpdateComponent } from './professor/professor-update/professor-update.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentModule } from './student/student.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD

=======
>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StudentModule,
    RegistrationComponent
<<<<<<< HEAD
=======

>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
