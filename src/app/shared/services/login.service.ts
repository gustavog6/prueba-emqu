import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}

  login(email: string, password: string): boolean {
    if (email === 'admin@mail.com' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
