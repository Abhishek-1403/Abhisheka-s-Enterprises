import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { AddToCartService } from '../cart/add-to-cart.service';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [],
})
export class HomeComponent implements OnInit {
  urlLeftSide = './assets/ampireLeftSideImage.jpg';
  urlRightSide = './assets/ampireRightSideImage.jpg';
  urlNavBackGround = './assets/navCenterBackGroundImage.jpg';
  faSearchengin = faSearchengin;

  
  images = [
    '../assets/saleProduct1.png',
    '../assets/saleProduct2.png',
    '../assets/saleProduct5.png',
    '../assets/saleProduct6.png',
    '../assets/saleProduct4.png',
  ];

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;


  
  
  
  
  
  
  
  
  arr2: {
    id: number;
    name: string;
    price: number;
    specification: string;
    image: string;
    Quantity: number;
  }[] = [];

  constructor(
    private homeService: HomeService,
    private addToCartService: AddToCartService,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.arr2 = this.homeService.getMyProducts();
    // this.getProduct();
    // this.arr = this.homeService.arr2;
    // this.arr2 = this.homeService.arr;
    //console.log(this.arr2);
  }

  status = false;
  addItem(id: number, op1: string, op2: string, price: number) {
    this.status = this.auth.isLogin;
    //console.log(this.status);

    this.status
      ? (this.quantityChange(id, op1), this.subTotalUpDate(price, op2))
      : this.gotoLogin();
  }

  gotoLogin() {
    this.router.navigate(['login']);
  }

  quantityChange(id: number, operation: string) {
    this.homeService.QuantityChange(id, operation);
  }

  subTotalUpDate(price: number, operation: string) {
    this.addToCartService.subTotalUpdate(price, operation);
    this.addToCartService.disCount();
    this.addToCartService.Gst();
    this.addToCartService.totalPrize();
    this.addToCartService.totalCartItemUpdate();
  }

  // getProduct(){
  //   this.homeService.getData().subscribe(
  //     (response:any )=> console.log(response),
  //     (err:any) => console.log(err)
  //   )
  // }
}
