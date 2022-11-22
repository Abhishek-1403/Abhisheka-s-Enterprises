import { Component, OnInit } from '@angular/core';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCcAmex  } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cartItemNo=0;
  faCcMastercard=faCcMastercard;
  faCcVisa=faCcVisa;
  faCcPaypal=faCcPaypal;
  faCcAmex=faCcAmex;
  faArrowLeft = faArrowLeft;

}
