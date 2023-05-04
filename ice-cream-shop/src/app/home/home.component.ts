import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
