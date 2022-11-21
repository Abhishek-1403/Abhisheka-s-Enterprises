import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlLeftSide="./assets/ampireLeftSideImage.jpg";
  urlRightSide="./assets/ampireRightSideImage.jpg";
  urlNavBackGround="./assets/navCenterBackGroundImage.jpg";

 basicAutocomplete = document.querySelector('#search-autocomplete');
 data = ['One', 'Two', 'Three', 'Four', 'Five'];
 dataFilter = (value:string) => {
  return this.data.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

// new mdb.Autocomplete(this.basicAutocomplete, {
//   filter: dataFilter
// });

  itemValue0=0;
  itemValue1=0;
  itemValue2=0;
  itemValue3=0;
  itemValue4=0;
  

  onClickAdd0(){
    this.itemValue0=this.itemValue0+1;
  }
  onClickSub0(){
    this.itemValue0=this.itemValue0-1;
  }
  onClickAdd1(){
    this.itemValue1=this.itemValue1+1;
  }
  onClickSub1(){
    this.itemValue1=this.itemValue1-1;
  }
  onClickAdd2(){
    this.itemValue2=this.itemValue2+1;
  }
  onClickSub2(){
    this.itemValue2=this.itemValue2-1;
  }
  onClickAdd3(){
    this.itemValue3=this.itemValue3+1;
  }
  onClickSub3(){
    this.itemValue3=this.itemValue3-1;
  }
  onClickAdd4(){
    this.itemValue4=this.itemValue4+1;
  }
  onClickSub4(){
    this.itemValue4=this.itemValue4-1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
