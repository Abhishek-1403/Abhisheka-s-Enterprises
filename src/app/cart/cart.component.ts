import { Component, OnInit } from '@angular/core';
import { faCcMastercard, faOpera } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AddToCartService } from '../add-to-cart.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  arr: {
    id: number;
    name: string;
    price: number;
    specification: string;
    image: string;
    Quantity: number;
  }[] = [];


  cartArray: {
    id: number;
    name: string;
    price: number;
    specification: string;
    image: string;
    Quantity: number;
  }[] = this.arr.filter(function (ele) {
    return ele.Quantity > 0;
  });
 

  constructor(
    private homeService: HomeService,
    private addToCartService: AddToCartService
  ) {}

  ngOnInit(): void {
    this.arr = this.homeService.arr;
  }

  faCcMastercard = faCcMastercard;
  faCcVisa = faCcVisa;
  faCcPaypal = faCcPaypal;
  faCcAmex = faCcAmex;
  faArrowLeft = faArrowLeft;

  quantityChange(id: number, operation: string) {
    if (this.arr[id].Quantity === 0) {
      this.homeService.QuantityChange(id, operation);
    } else {
      this.homeService.QuantityChange(id, operation);
    }
  }
  subTotal = 0;
  getCartSubTotal() {
    this.subTotal = this.addToCartService.subtotal;
    return this.subTotal;
  }
  gst = 0;
  getCartGst() {
    this.gst = this.addToCartService.tax;
    return this.gst;
  }
  discount = 0;
  getCartDiscount() {
    this.discount = this.addToCartService.discount;
    return this.discount;
  }
  totalBill = 0;
  getCartTotalBill() {
    this.totalBill = this.addToCartService.totalprize;
    return this.totalBill;
  }

  subTotalUpDate(price: number, operation: string) {
    this.addToCartService.subTotalUpdate(price, operation);
    this.addToCartService.disCount();
    this.addToCartService.Gst();
    this.addToCartService.totalPrize();
   
  }


  totalCartItemUpdate(){
    return  this.addToCartService.totalCartItemUpdate();
   
  }



  // totalCartItemUpdate() {
  //   console.log('fn called');
  //   console.log(this.cartArray.length);
  //   for (let i = 0; i < this.cartArray.length; i++) {
  //     this.cartItemNo += this.cartArray[i].Quantity;
  //     console.log(this.cartItemNo);
  //     console.log('Abhishek Gupta');
  //   }
  // }
}
