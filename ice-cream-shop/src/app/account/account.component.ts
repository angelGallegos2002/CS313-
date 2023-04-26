import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private authService: AuthService) {}

  login(): void {
    this.authService
    .login('test', 'test');
  }
  
  logout(): void {
  this.authService.logout();
  }
  }