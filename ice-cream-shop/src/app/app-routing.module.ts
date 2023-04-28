import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowseIceCreamComponent } from './browse-ice-cream/browse-ice-cream.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { PlaceOrdersComponent } from './place-orders/place-orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { OnlineCheckoutComponent } from './online-checkout/online-checkout.component';
import { IceCreamListComponent } from './ice-cream-list/ice-cream-list.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { AccountComponent } from './account/account.component';
const routes: Routes = [
  { path: '', redirectTo: '/browse', pathMatch: 'full' },
  { path: 'browse', component: BrowseIceCreamComponent },
  { path: 'account', component: ManageAccountComponent },
  { path: 'orders', component: PlaceOrdersComponent },
  { path: 'manage-orders', component: ManageOrdersComponent },
  { path: 'checkout', component: OnlineCheckoutComponent },
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'account', component: AccountComponent },
  { path: 'ice-cream-list', component: IceCreamListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule],
})
export class AppRoutingModule {}
