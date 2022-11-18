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


  constructor() { }

  ngOnInit(): void {
  }

}
