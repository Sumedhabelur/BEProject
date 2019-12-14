import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { ForgotpasswordComponent } from './authentication/forgotpassword/forgotpassword.component';
import { ResetComponent } from './authentication/reset/reset.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'reset', component: ResetComponent},
  {path: 'student/list', component: StudentListComponent},
  {path: 'student/detail/:id', component: StudentDetailComponent},
  {path: 'professor/list', component: ProfessorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
