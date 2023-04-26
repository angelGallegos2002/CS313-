import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseIceCreamComponent } from './browse-ice-cream/browse-ice-cream.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { PlaceOrdersComponent } from './place-orders/place-orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { OnlineCheckoutComponent } from './online-checkout/online-checkout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { IceCreamListComponent } from './ice-cream-list/ice-cream-list.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseIceCreamComponent,
    ManageAccountComponent,
    PlaceOrdersComponent,
    ManageOrdersComponent,
    OnlineCheckoutComponent,
    HeaderComponent,
    HomeComponent,
    OrderComponent,
    IceCreamListComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
