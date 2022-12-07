import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCcMastercard, faOpera } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AddToCartService } from './add-to-cart.service';
import { HomeService } from '../shared/home.service';
import { Router } from '@angular/router';

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
  }[] = [];
  cartArrayUpdate() {
    this.cartArray = this.arr.filter(function (ele: any) {
      return ele.Quantity > 0;
    });
  }


  constructor(
    private homeService: HomeService,
    private addToCartService: AddToCartService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.arr = this.homeService.arr;
    this.cartArrayUpdate();
  }

  faCcMastercard = faCcMastercard;
  faCcVisa = faCcVisa;
  faCcPaypal = faCcPaypal;
  faCcAmex = faCcAmex;
  faArrowLeft = faArrowLeft;

  urlEmptyCart = '../assets/emptyCartImage.webp';
  gotoHome(){
    this.router.navigate(['home']);
  }

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

  totalItem = 0;
  totalCartItemUpdate() {
    this.totalItem = this.addToCartService.totalCartItemUpdate();
    return this.totalItem;
  }

  addToFirebase(form: NgForm) {
    console.log('addTo FIrebase is called..');
    const name = form.value.name;
    const cardNo = form.value.cardNumber;
    const totalItem = this.totalItem;
    const price = this.subTotal;
    const status = 'Confirm';
    const email = form.value.email;
    const mobNo = form.value.mobNo;

    this.addToCartService.cartArrayUpdate(
      name,
      cardNo,
      email,
      mobNo,
      totalItem,
      price,
      status
    );
    this.addToCartService.addOrderToFirebase();
  }
}
