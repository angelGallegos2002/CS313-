import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject } from 'rxjs';
import { order } from './models/order';

export interface IceCreamOrder {
  id: number;
  flavorId: number;
  quantity: number;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: IceCreamOrder[] = [];
  private orderNum = 0;

  private ordersSource = new BehaviorSubject<IceCreamOrder[]>([]);
  orders$ = this.ordersSource.asObservable();

  constructor(private db: AngularFireDatabase) {}

  addOrder(newOrder: order){
    this.orderNum = Math.floor(Math.random() * 10000)+1;
    const objectRef = this.db.object('/order/' + this.orderNum);
    objectRef.set(newOrder);
  }

  updateOrderStatus(orderId: number, status: string): void {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.status = status;
      this.ordersSource.next(this.orders);
    }
  }
}
