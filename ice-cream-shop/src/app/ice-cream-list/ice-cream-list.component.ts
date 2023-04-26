import { Component, OnInit } from '@angular/core';
import { Flavor } from '../models/flavor.model';
@Component({
  selector: 'app-ice-cream-list',
  templateUrl: './ice-cream-list.component.html',
  styleUrls: ['./ice-cream-list.component.css']
})
export class IceCreamListComponent {
  flavors: Flavor[] = []; // Add this line

  constructor() { }

  ngOnInit(): void {
  }
}
