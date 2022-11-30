import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css']
})
export class ListOfItemsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  faSearchengin = faSearchengin;


  gotoHome(){
    this.router.navigate(['home']);
  }
}
