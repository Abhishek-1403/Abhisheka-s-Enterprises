import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { LoginComponent } from './login/login.component';
import { SignupAsSellerComponent } from './signup/signup-as-seller/signup-as-seller.component';
import { SignupComponent } from './signup/signup.component';
import { SingupAsPurchaserComponent } from './signup/singup-as-purchaser/singup-as-purchaser.component';

const routes: Routes = [
  {  path:'' , redirectTo:'home' ,pathMatch:'full'  },
  {  path:'home' ,component:HomeComponent  },
  {  path:'listofitems' ,component:ListOfItemsComponent  },
  {  path:'login' ,component:LoginComponent  },
  {  path:'signup' ,component:SignupComponent  },
  {  path:'cart' ,component:CartComponent  },
  {  path:'signup/signupasprovider',component:SignupAsSellerComponent},
  {  path:'signup/signupasuser',component:SingupAsPurchaserComponent},
  {  path:'**' ,component:HomeComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
