import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {  path:'' , redirectTo:'home' ,pathMatch:'full'  },
  {  path:'home' ,component:HomeComponent  },
  {  path:'listofitems' ,component:ListOfItemsComponent  },
  {  path:'login' ,component:LoginComponent  },
  {  path:'signup' ,component:SignupComponent  },
  {  path:'**' ,component:HomeComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
