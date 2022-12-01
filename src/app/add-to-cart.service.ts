import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomeService } from './home.service';


@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor(private http:HttpClient,private homeservice:HomeService){}

  subtotal=0;
  tax=0;
  discount=0;
  totalprize=0;
  cartItemNo=0;
  firebaseStorageUrl = "https://abhisheka-s-enterprises-default-rtdb.firebaseio.com/Orders.json";

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

  addOrderToFirebase(){
    this.http.post(this.firebaseStorageUrl,this.cartArray).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  // firebaseStorageUrl ="https://abhisheka-s-enterprises-default-rtdb.firebaseio.com/Orders";


  cartArray: {
    id: number;
    name: string;
    price: number;
    specification: string;
    image: string;
    Quantity: number;
  }[] =[];
  cartArrayUpdate(){
    this.cartArray=this.homeservice.arr.filter(function (ele:any) {
      return ele.Quantity > 0;
    });
  }


}
