import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  arr=[
    {id:0,name:"IPhone13 Pro",price:144415,specification:"128GB(Gold)",image:"https://shop.unicornstore.in/uploads/images/medium/34e6957bed83de93e7dc296ab0ede5c6.png",Quantity:0 },
    {id:1,name:"IPhone12 ",price:54990,specification:"64GB(Purple)",image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662424212/Croma%20Assets/Communication/Mobiles/Images/234252_czgdvc.png/mxw_1650,f_auto",Quantity:0},
    {id:2,name:"IPhone11",price:41490,specification:"64GB(White)",image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662418914/Croma%20Assets/Communication/Mobiles/Images/230107_t40uo8.png/mxw_1650,f_auto",Quantity:0},
    {id:3,name:"IPhone14 Pro Max",price:134900,specification:"256GB(Deep purple)",image:"https://img1.gadgetsnow.com/gd/images/products/additional/large/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg",Quantity:0},
    {id:4,name:"IPhone13 ",price:69900,specification:"256GB(Blue)",image:"https://shop.unicornstore.in/uploads/images/medium/10bb152089499515e46bbdfaba61ac9e.png",Quantity:0}

  ];
  QuantityChange(id:number,operation:string){

   if(operation=="1"){
      this.arr[id].Quantity++;
      console.log(this.arr[id])
    }
    if(operation=="-1"){
      this.arr[id].Quantity--;
      console.log(this.arr[id])
   }
   if(operation=="0"){
    // for cart updation in future. When cart is empty then delete from cart.
   }
  }


  constructor() { }
 
}
