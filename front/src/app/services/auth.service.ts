import { Injectable } from '@angular/core';
import { IformLogin } from '../interfaces/IformLogin';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { 

  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('auth');	
  }

  public login(formValue : IformLogin){
    if(formValue.email === 'admin@admin.com' && formValue.password === 'admin'){
      localStorage.setItem('auth', 'true');
      this.router.navigate(['/home']);
    }
  }

  public logout(){
    localStorage.removeItem('auth');
  }

}
