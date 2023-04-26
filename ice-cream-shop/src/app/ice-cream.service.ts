import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface IceCreamFlavor {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlavorService {
  private flavors: IceCreamFlavor[] = [
    { id: 1, name: 'Vanilla', description: 'Classic vanilla ice cream' },
    { id: 2, name: 'Chocolate', description: 'Rich chocolate ice cream' },
    { id: 3, name: 'Strawberry', description: 'Sweet strawberry ice cream' },
  ];

  constructor() {}

  getFlavors() {
    return of(this.flavors);
  }
}
