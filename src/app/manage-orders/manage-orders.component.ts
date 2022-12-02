import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';



@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {


  firebaseStorageUrl ="https://abhisheka-s-enterprises-default-rtdb.firebaseio.com/Orders.json";


  // cartArray: {
  //   id: number;
  //   name: string;
  //   price: number;
  //   specification: string;
  //   image: string;
  //   Quantity: number;
  // }[] =[];

  cartArray: {
    name:string,
    totalItem:number,
    price:number,
    status:string
  }[] =[];

  firebaseArray: any=[];


  constructor(private addToCartservice:AddToCartService,private http:HttpClient) { 
   
  }

  ngOnInit(): void {
    this.getOrderDetailsFromFirebase();
  }

  getOrderDetailsFromFirebase(){
    // return this.http.get(this.firebaseStorageUrl).subscribe((response:any)=>{
    //   // console.log(response);
    //   Object.keys(response).forEach((obj) => {
    //     this.cartArray.push(response[obj]);
    //     // this.firebaseArray.push(response[obj]);
    //     // console.log(this.firebaseArray);
        
    //   });
    //   console.log(this.cartArray);
    //   // Object.keys(this.firebaseArray).forEach((obj1)=>{
    //   //   // console.log("its working");
       
    //   //   console.log(this.cartArray);
    //   // });
    // },
    // (error:any)=>{
    //   console.log(error);
    // });
    
    return this.http.get(this.firebaseStorageUrl).subscribe(
      (response: any) => {
        Object.keys(response).forEach((obj) => {
          this.cartArray.push(response[obj]);
          console.log(this.cartArray);
        });
      },
      (err: any) => console.log(err)
      
    );

   
  }




}
