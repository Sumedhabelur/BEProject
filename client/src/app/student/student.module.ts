import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
<<<<<<< HEAD
import { ReactiveFormsModule , FormsModule } from '@angular/forms';



=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8


@NgModule({
  declarations: [
    StudentListComponent,
    StudentCreateComponent,
    StudentDetailComponent,
<<<<<<< HEAD
    StudentUpdateComponent,

=======
    StudentUpdateComponent
>>>>>>> c1f73e1e8cb587600844be588bf9338e6c0a8db8
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class StudentModule { }
