import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OnlineCheckoutComponent } from './online-checkout/online-checkout.component';
import { IceCreamListComponent } from './ice-cream-list/ice-cream-list.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'checkout', component: OnlineCheckoutComponent },
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'ice-cream-list', component: IceCreamListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
