import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AccountService } from '../account.service';
import { account } from '../models/account.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  uid!: string;
  firstName!: string;
  lastName!: string;

  constructor(private authService: AuthService, private afAuth: AngularFireAuth, private accService: AccountService) { }


  onRegister() {
    this.authService.signUp(this.email, this.password)
      .then((result) => {
        console.log('User registered successfully:', result);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.uid = user.uid;
        console.log('uid is', this.uid);
      }
    });
    setTimeout(() => {

      const newAccount: account = {
        firstName: this.firstName,
        lastName: this.lastName,
        userID: this.uid

      }
      this.accService.addAccount(newAccount);
    }, 2000);
  }
}
