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
  
  constructor(private homeService:HomeService,private addToCart:AddToCartService) { }
  
  ngOnInit(){

    this.arr=this.homeService.arr;
    console.log(this.arr[0].price);
   
  }
  quantityChange(id:number,operation:string){
    if(this.arr[id].Quantity===0){
      this.homeService.QuantityChange(id,operation);
      this.addToCart.addItem(this.arr[id].name,this.arr[id].price,this.arr[id].specification,this.arr[id].image);

    }
    else{
      this.homeService.QuantityChange(id,operation);
    }
  
  }

  
  
  







  
  //  basicAutocomplete = document.querySelector('#search-autocomplete');
//  data = ['One', 'Two', 'Three', 'Four', 'Five'];
//  dataFilter = (value:string) => {
//   return this.data.filter((item) => {
//     return item.toLowerCase().startsWith(value.toLowerCase());
//   });
// };

}
