import { Routes } from '@angular/router';
import { SchoolsComponent } from './schools.component';
import { FormSchoolComponent } from '../../components/form-school/form-school.component';

export const SchoolsRoutes: Routes = [
  {
    path: '',
    component: SchoolsComponent,
  },
  {
    path: 'schools/new',
    component: FormSchoolComponent,
  },
];
