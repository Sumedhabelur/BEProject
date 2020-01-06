import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentCreateComponent,
    StudentDetailComponent,
    StudentUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudentRoutingModule,
  ]
})
export class StudentModule { }
