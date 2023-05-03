import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { account } from './models/account.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ice-cream-shop';
  user$!: Observable<any>;
  userid: any;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService, private db: AngularFireDatabase) { } // Inject the AuthService

  logout() {
    this.authService.signOut(); // Call signOut method on the instance of AuthService
    window.location.reload()
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user != null) {
        this.userid = user.uid;
        console.log('test' + this.userid);

        setTimeout(() => {
          const account = this.db.object('/account/' + this.userid);
          this.user$ = account.valueChanges();

        }, 2000);
      }
    });

  }
}
