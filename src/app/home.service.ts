import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  arr2: {
    Quantity: number;
    id: number;
    image: string;
    name: string;
    price: number;
    specification: string;
  }[] = [];
  arr: {
    Quantity: number;
    id: number;
    image: string;
    name: string;
    price: number;
    specification: string;
  }[] = this.arr2;

  firebaseUrl1 ='https://abhisheka-s-enterprises-default-rtdb.firebaseio.com/Phones%20Product.json';
  firebaseUrlEle = 'https://abhisheka-s-enterprises-default-rtdb.firebaseio.com/Electronics.json';
  constructor(private http: HttpClient) {
    this.getData();
    this.getDataEle();

  }


 

  QuantityChange(id: number, operation: string) {
    if (operation == '1') {
      this.arr[id].Quantity++;
      console.log(this.arr[id]);
    }
    if (operation == '-1') {
      this.arr[id].Quantity--;
      console.log(this.arr[id]);
    }
  }

  getData() {
    // console.log(this.arr2);
    return this.http.get(this.firebaseUrl1).subscribe(
      (response: any) => {
        Object.keys(response).forEach((obj) => {
          this.arr2.push(response[obj]);
        });
      },
      (err: any) => console.log(err)
    );
  }
  getDataEle() {
    // console.log(this.arr2);
    return this.http.get(this.firebaseUrlEle).subscribe(
      (response1: any) => {
        Object.keys(response1).forEach((obj) => {
          this.arr2.push(response1[obj]);
        });
      },
      (err1: any) => console.log(err1)
    );
  }
  getMyProducts() {
    return this.arr;
  }
}
