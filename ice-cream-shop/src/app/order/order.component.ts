import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flavor } from '../models/flavor.model';
import { Topping } from '../models/toppings.model';
import { OrderService } from '../order.service';
import { order } from '../models/order';
import { AuthService } from '../auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-order',
  
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
 
})
export class OrderComponent implements OnInit {
  selectedFlavor!: Flavor;
  flavors: Flavor[];
  orderForm: FormGroup; // Add this line
  formBuilder: FormBuilder;
  size!: string;
  name!: string;
  currentDate!: Date;
  uid: string = 'null';
  notes!: string;

  constructor(formBuilder: FormBuilder, private authService: AuthService, private afAuth: AngularFireAuth, private ordService: OrderService) {
    this.formBuilder = formBuilder;
    //this.selectedFlavor = new Flavor(0, '', '', '');// Add this line

    this.flavors = [
      new Flavor(1, 'Vanilla', 'Classic vanilla flavor', 'path/to/vanilla-image.jpg'),
      new Flavor(2, 'Chocolate', 'Rich chocolate flavor', 'path/to/chocolate-image.jpg'),
      new Flavor(3, 'Strawberry', 'Sweet strawberry flavor', 'path/to/strawberry-image.jpg'),
    ];
    this.orderForm = this.formBuilder.group({
      // Define your form controls here
    });
  }
  
  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      flavor: ['', Validators.required],
      size: ['', Validators.required],
      notes: ['']
    });
  }

  onSubmit() {
   // if (this.orderForm.valid) {
      console.log('Order submitted:', this.orderForm.value);
      this.currentDate = new Date();
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.uid = user.uid;
          console.log('uid is', this.uid);
        }
      });
      setTimeout(() => {
        const newOrder: order = {
          flavor: this.selectedFlavor.name,
          size: this.size,
          timesubmitted: this.currentDate.toDateString() + this.currentDate.toTimeString(),
          name: this.name,
          userID: this.uid,
          notes: this.notes,
        }
        this.ordService.addOrder(newOrder);
      }, 2000);
    //} else {
    //  console.log('Form is not valid');
    //}
  }
}
