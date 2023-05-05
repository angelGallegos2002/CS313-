import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of,pipe,map } from 'rxjs';
import { Flavor } from './models/flavor.model';

export interface IceCreamFlavor {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlavorService {
  flavList:Flavor[]=[];
  private flavors: IceCreamFlavor[] = [
    { id: 1, name: 'Vanilla', description: 'Classic vanilla ice cream' },
    { id: 2, name: 'Chocolate', description: 'Rich chocolate ice cream' },
    { id: 3, name: 'Strawberry', description: 'Sweet strawberry ice cream' },
  ];

  constructor(private db: AngularFireDatabase,) {
  }

  getFlavors(){
    this.db.list("Ice Cream Flavors").valueChanges().pipe(
      map((data: any[]) => {
        // Transform the FirebaseListData into an array of objects
        return data.map(item => {
          return {
            name: item.name,
            description: item.description,
            size: item.size,
            id:item.id,
          };
        });
      })
    ).subscribe((flavors: Flavor[]) => {
      // Do something with the array of flavors
      console.log(flavors);
      this.flavList=flavors;
    });
  }
}
