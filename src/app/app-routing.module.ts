import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './shared/authentication-guard';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { LoginComponent } from './login-signup/login/login.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { SignupAsSellerComponent } from './login-signup/signup/signup-as-seller/signup-as-seller.component';
import { SignupComponent } from './login-signup/signup/signup.component';
import { SingupAsPurchaserComponent } from './login-signup/signup/singup-as-purchaser/singup-as-purchaser.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop-partners', component: ListOfItemsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'signup/signupasprovider', component: SignupAsSellerComponent },
  { path: 'signup/signupasuser', component: SingupAsPurchaserComponent },
  { path: 'manageorders', component: ManageOrdersComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
