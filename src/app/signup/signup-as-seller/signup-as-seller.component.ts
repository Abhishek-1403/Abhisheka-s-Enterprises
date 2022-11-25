import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup-as-seller',
  templateUrl: './signup-as-seller.component.html',
  styleUrls: ['./signup-as-seller.component.css']
})
export class SignupAsSellerComponent implements OnInit {
  // @ViewChild ('f') sellerForm:any=NgForm
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   console.log(this.sellerForm);
  //   this.sellerForm.reset();
  // }

}
