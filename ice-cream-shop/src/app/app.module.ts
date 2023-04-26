import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseIceCreamComponent } from './browse-ice-cream/browse-ice-cream.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { PlaceOrdersComponent } from './place-orders/place-orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { OnlineCheckoutComponent } from './online-checkout/online-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowseIceCreamComponent,
    ManageAccountComponent,
    PlaceOrdersComponent,
    ManageOrdersComponent,
    OnlineCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
