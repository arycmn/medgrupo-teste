import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { RouterModule } from '@angular/router';
import { SchoolsRoutes } from './schools.routes';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { FormSchoolComponent } from '../../components/form-school/form-school.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../components/shared/shared.module';

@NgModule({
  declarations: [
    SchoolsComponent,
    FormSchoolComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SchoolsRoutes),
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [ApiService],
})
export class SchoolsModule { }
