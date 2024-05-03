import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const loginGuard: CanActivateFn = (route, state) => {
  return inject(LoginService).isLoggedIn
    ? true
    : inject(Router).navigate(['/auth/login']);
};
