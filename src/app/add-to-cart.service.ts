import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  
  subtotal=0;
  tax=0;
  discount=0;
  totalprize=0;
  cartItemNo=0;

  subTotalUpdate(price:number,operation:string){
    if(operation=="+"){
      this.cartItemNo +=1;
      this.subtotal += price;
    }
    else if(operation=="-"){
      this.cartItemNo -=1;
      this.subtotal -= price;
    }
    
  }

  totalCartItemUpdate(){
    return this.cartItemNo;
  }
  
  disCount(){
    this.discount=(this.subtotal*15)/100;
  }

  Gst(){
    this.tax=((this.subtotal-this.discount)*18)/100;
  }
  totalPrize(){
    this.totalprize=this.subtotal + this.tax - this.discount ;
  }

  

 
}
