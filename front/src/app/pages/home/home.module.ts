import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapHouseAdd, bootstrapPersonPlusFill } from '@ng-icons/bootstrap-icons';
import { heroAcademicCap } from '@ng-icons/heroicons/outline';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    FormsModule,
    NgIconsModule.withIcons({  bootstrapHouseAdd,heroAcademicCap,bootstrapPersonPlusFill }),
  ]
})
export class HomeModule { }
