import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private orderCounter = 0;

  private ordersSource = new BehaviorSubject<IceCreamOrder[]>([]);
  orders$ = this.ordersSource.asObservable();

  constructor() {}

  createOrder(flavorId: number, quantity: number): IceCreamOrder {
    const newOrder: IceCreamOrder = {
      id: ++this.orderCounter,
      flavorId,
      quantity,
      status: 'pending',
    };
    this.orders.push(newOrder);
    this.ordersSource.next(this.orders);
    return newOrder;
  }

  updateOrderStatus(orderId: number, status: string): void {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.status = status;
      this.ordersSource.next(this.orders);
    }
  }
}
