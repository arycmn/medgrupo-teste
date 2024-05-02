import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { RouterModule } from '@angular/router';
import { StudentsRoutes } from './students.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormStudentsComponent } from '../../components/form-students/form-students.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentsComponent,
    FormStudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(StudentsRoutes),
    HttpClientModule,
    FormsModule
  ]
})
export class StudentsModule { }
