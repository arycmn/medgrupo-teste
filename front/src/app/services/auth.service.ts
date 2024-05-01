import { Injectable } from '@angular/core';
import { IformLogin } from '../interfaces/IformLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 

  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('auth');	
  }

  public login(formValue : IformLogin){
    if(formValue.email === 'admin@admin.com' && formValue.password === 'admin'){
      localStorage.setItem('auth', 'true');
    }
  }

  public logout(){
    localStorage.removeItem('auth');
  }

}
