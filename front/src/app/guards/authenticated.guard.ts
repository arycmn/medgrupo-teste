import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();
const router = new Router();
export const authenticatedGuard: CanMatchFn = (route, state) => {

  if (authService.isAuthenticated()) {
    return noAuthenticated();
  }
  router.navigate(['/login']);
  return false;
};

const noAuthenticated = ()=>{
  localStorage.clear();
  router.navigate(['/login']);
  return false;
}
