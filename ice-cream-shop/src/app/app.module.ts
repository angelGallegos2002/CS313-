import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import RouterModule and Route configuration
import { RouterModule, Routes } from '@angular/router';

// Import Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../app/enviroments/enviroment';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { BrowseIceCreamComponent } from './browse-ice-cream/browse-ice-cream.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

// Define your routes
const routes: Routes = [
  { path: '', component: BrowseIceCreamComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderComponent,
    BrowseIceCreamComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Add RouterModule to the imports array and pass the routes
    RouterModule.forRoot(routes),
    AppRoutingModule,
    // Add Angular Material modules to the imports array
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    AngularFireModule.initializeApp(environment.firebase)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
