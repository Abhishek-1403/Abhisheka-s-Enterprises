import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';
import { LoginSignupModule } from './login-signup/login-signup.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfItemsComponent, 
    ManageOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule,
    CartModule,
    LoginSignupModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
