import { Component, OnInit } from '@angular/core';
import { Flavor } from '../models/flavor.model';
import { IceCreamFlavor,FlavorService } from '../ice-cream.service';

import { Observable, } from 'rxjs';
import { async } from 'rxjs';
@Component({
  selector: 'app-ice-cream-list',
  templateUrl: './ice-cream-list.component.html',
  styleUrls: ['./ice-cream-list.component.css']
})
export class IceCreamListComponent {
  flavors: Flavor[] = []; // Add this line
  selected:String="Small";
  constructor(private iceCreamService :FlavorService) {

  }

  ngOnInit(): void {
    this.iceCreamService.getFlavors();
   setTimeout(() => {
    this.flavors=this.iceCreamService.flavList;
    console.log(this.flavors);
    }, 500);;

  }
}
