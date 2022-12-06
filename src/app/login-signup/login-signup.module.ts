import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SignupAsSellerComponent } from './signup/signup-as-seller/signup-as-seller.component';
import { SingupAsPurchaserComponent } from './signup/singup-as-purchaser/singup-as-purchaser.component';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    SignupAsSellerComponent,
    SingupAsPurchaserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule,
  ]
})
export class LoginSignupModule { }
