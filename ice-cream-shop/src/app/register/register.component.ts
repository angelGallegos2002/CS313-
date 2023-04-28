import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService
      .signUp(this.email, this.password)
      .then(result => {
        console.log('Registration successful:', result);
      })
      .catch(error => {
        console.error('Registration failed:', error);
      });
  }
}
