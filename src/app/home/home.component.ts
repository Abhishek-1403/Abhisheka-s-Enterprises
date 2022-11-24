import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[]
})
export class HomeComponent implements OnInit {

  urlLeftSide="./assets/ampireLeftSideImage.jpg";
  urlRightSide="./assets/ampireRightSideImage.jpg";
  urlNavBackGround="./assets/navCenterBackGroundImage.jpg";
  faSearchengin = faSearchengin;

  arr:{id:number,name:string,price:number,specification:string,image:string,Quantity:number}[]=[];
  
  constructor(private homeService:HomeService,private addToCartService:AddToCartService) { }
  
  ngOnInit(){

    this.arr=this.homeService.arr;
    
   
  }
  quantityChange(id:number,operation:string){
    this.homeService.QuantityChange(id,operation);
  
  }

  subTotalUpDate(price:number,operation:string){
    this.addToCartService.subTotalUpdate(price,operation);
    this.addToCartService.disCount();
    this.addToCartService.Gst();
    this.addToCartService.totalPrize();
    this.addToCartService.totalCartItemUpdate();
    
  }
  // totalCartItemUpdate(operation:string){
    
  // }
  
  
  







  

}
