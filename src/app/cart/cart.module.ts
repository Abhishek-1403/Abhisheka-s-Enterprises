import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './cart.component';
import { HttpClientModule } from '@angular/common/http';
import { AddToCartService } from './add-to-cart.service';



@NgModule({
  declarations: [CartComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    

    
  ],
  providers:[AddToCartService]
})
export class CartModule { }
