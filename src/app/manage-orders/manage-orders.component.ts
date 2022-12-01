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


  cartArray: {
    id: number;
    name: string;
    price: number;
    specification: string;
    image: string;
    Quantity: number;
  }[] =[];


  constructor(private addToCartservice:AddToCartService,private http:HttpClient) { 
   
  }

  ngOnInit(): void {
    this.getOrderDetailsFromFirebase();
  }

  getOrderDetailsFromFirebase(){
    this.http.get(this.firebaseStorageUrl).subscribe((response:any)=>{
      // console.log(response);
      Object.keys(response).forEach((obj) => {
        this.cartArray.push(response[obj]);
        console.log(this.cartArray);
      });
    },
    (error:any)=>{
      console.log(error);
    });
  }




}
