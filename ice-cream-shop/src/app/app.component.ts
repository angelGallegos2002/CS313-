import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ice-cream-shop';
  user: any;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService) {} // Inject the AuthService

  logout() {
    this.authService.signOut(); // Call signOut method on the instance of AuthService
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }
}
