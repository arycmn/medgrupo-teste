import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { RouterModule } from '@angular/router';
import { ClassesRoutes } from './classes.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormClassComponent } from '../../components/form-class/form-class.component';




@NgModule({
  declarations: [
    ClassesComponent,
    FormClassComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ClassesRoutes),
    HttpClientModule,
    FormsModule
  ],
})
export class ClassesModule { }
