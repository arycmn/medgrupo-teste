import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';




export const authenticatedGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const noAuthenticated = () => {
    localStorage.clear();
    router.navigate(['/login']);
    return false;
  };
  
  if (!authService.isAuthenticated()) {
    return noAuthenticated();
  }
  return true;
};


