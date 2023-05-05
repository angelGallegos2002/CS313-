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
      const objectRef = this.db.object('/account/' + uid);
      objectRef.set(newAccount);
    }



   
}
