import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http'

// Import RouterModule and Route configuration
import { RouterModule, Routes } from '@angular/router';

// Import Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../enviroments/enviroment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { BrowseIceCreamComponent } from './browse-ice-cream/browse-ice-cream.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
import {MatButtonModule} from '@angular/material/button';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {MatCard, MatCardModule} from '@angular/material/card';
import { IceCreamListComponent } from './ice-cream-list/ice-cream-list.component';

// Define your routes
const routes: Routes = [
  { path: '', component: BrowseIceCreamComponent },
  { path: 'order', component: OrderComponent },
  { path: 'ice-cream-service', component: IceCreamListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderComponent,
    BrowseIceCreamComponent,
    RegisterComponent,
    LoginComponent,
    IceCreamListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HomeModule,
    // Add RouterModule to the imports array and pass the routes
    RouterModule.forRoot(routes),
    AppRoutingModule,
    // Add Angular Material modules to the imports array
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    AngularFireDatabaseModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
