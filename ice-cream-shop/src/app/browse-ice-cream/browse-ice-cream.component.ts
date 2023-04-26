import { Component, OnInit } from '@angular/core';
import { Flavor } from '../models/flavor.model';
@Component({
  selector: 'app-browse-ice-cream',
  templateUrl: './browse-ice-cream.component.html',
  styleUrls: ['./browse-ice-cream.component.css']
  
})
export class BrowseIceCreamComponent {
  flavors: Flavor[] = []; // Replace 'Flavor' with the appropriate data type if different
}
