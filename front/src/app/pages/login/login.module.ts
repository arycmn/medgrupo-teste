import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routes';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(LoginRoutes),
  ]
})
export class LoginModule { }
