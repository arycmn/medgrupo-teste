import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { StudentsComponent } from './students.component';
import { RouterModule } from '@angular/router';
import { StudentsRoutes } from './students.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormStudentsComponent } from '../../components/form-students/form-students.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../components/shared/shared.module';
import { TruncatePipe } from '../../pipes/truncate.pipe';



@NgModule({
  declarations: [
    StudentsComponent,
    FormStudentsComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(StudentsRoutes),
    HttpClientModule,
    FormsModule,
    SharedModule,
  ],
  providers: [TitleCasePipe],
})
export class StudentsModule { }
