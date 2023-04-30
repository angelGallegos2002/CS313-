import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Replace 'login' with 'signIn'
    this.authService.signIn('test', 'test')
      .then((result) => {
        console.log('Login successful:', result);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  }

  onLogout(): void {
    // Replace 'logout' with 'signOut'
    this.authService.signOut()
      .then(() => {
        console.log('Logged out successfully');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  }
  onLogin(): void {
    this.authService.signIn('test', 'test')
      .then((result) => {
        console.log('Login successful:', result);
      })
      .catch((error) => {
        console.error('Error logging in:', error);
      });
  }

}
