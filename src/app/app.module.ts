import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { HomeService } from './home.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SingupAsPurchaserComponent } from './signup/singup-as-purchaser/singup-as-purchaser.component';
import { SignupAsSellerComponent } from './signup/signup-as-seller/signup-as-seller.component';
import { AuthenticationService } from './authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListOfItemsComponent,
    LoginComponent,
    SignupComponent,
    
    CartComponent,
         SingupAsPurchaserComponent,
         SignupAsSellerComponent,
         LoadingSpinnerComponent,
         ManageOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [HomeService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
