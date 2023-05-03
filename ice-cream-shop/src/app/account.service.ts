import { Injectable } from '@angular/core';
import { account } from './models/account.model';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private db: AngularFireDatabase) {}

    addAccount(newAccount: account, uid:string){
      //return this.http.post('https://ice-cream-shop-2d114-default-rtdb.firebaseio.com/' + 'account.json', newAccount);
      const objectRef = this.db.object('/account/' + uid);
      objectRef.set(newAccount);
    }



   
}
