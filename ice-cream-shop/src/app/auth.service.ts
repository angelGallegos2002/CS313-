import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSource = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSource.asObservable();

  constructor() {}

  login(username: string, password: string): boolean {
    // Replace with actual authentication logic (e.g., API call)
    if (username === 'test' && password === 'test') {
      this.isAuthenticatedSource.next(true);
      return true;
    } else {
      this.isAuthenticatedSource.next(false);
      return false;
    }
  }

  logout(): void {
    this.isAuthenticatedSource.next(false);
  }
}