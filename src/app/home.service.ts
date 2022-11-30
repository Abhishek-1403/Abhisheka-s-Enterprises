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

  firebaseUrl =
    'https://abhisheka-s-enterprises-default-rtdb.firebaseio.com/Phones%20Product.json';
  constructor(private http: HttpClient) {
    this.getData();
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
    return this.http.get(this.firebaseUrl).subscribe(
      (response: any) => {
        Object.keys(response).forEach((obj) => {
          this.arr2.push(response[obj]);
        });
      },
      (err: any) => console.log(err)
    );
  }
  getMyProducts() {
    return this.arr;
  }
}
