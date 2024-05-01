import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolsComponent } from './schools.component';
import { RouterModule } from '@angular/router';
import { SchoolsRoutes } from './schools.routes';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { bootstrapTrash } from '@ng-icons/bootstrap-icons'

@NgModule({
  declarations: [
    SchoolsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SchoolsRoutes),
    HttpClientModule,
    NgIconsModule.withIcons({  bootstrapTrash }),
  ],
  providers: [ApiService],
})
export class SchoolsModule { }
