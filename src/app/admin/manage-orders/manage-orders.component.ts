import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {


  firebaseStorageUrl ="https://abhisheka-s-enterprises-default-rtdb.firebaseio.com/Orders.json";


  cartArray: {
    name:string,
    email:string,
    mobNo:number,
    totalItem:number,
    price:number,
    status:string
  }[] =[];



  constructor(private http:HttpClient) { 
   
  }

  ngOnInit(): void {
    this.getOrderDetailsFromFirebase();
  }

  getOrderDetailsFromFirebase(){
   
    return this.http.get(this.firebaseStorageUrl).subscribe(
      (response: any) => {
        Object.keys(response).forEach((obj) => {
          this.cartArray.push(response[obj]);
          
        });
        console.log(this.cartArray);
      },
      (err: any) => console.log(err)   
    );

   
  }




}
