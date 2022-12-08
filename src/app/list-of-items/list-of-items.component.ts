import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css']
})
export class ListOfItemsComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.firebaseShopName();
  }
  faSearchengin = faSearchengin;

  isLoading=false;

  arr:{
    name:string,
    category:string,
    rating:number
  }[]=[];

  firebaseShopDataUrl="https://abhisheka-s-enterprises-default-rtdb.firebaseio.com/Shop'sData.json";
   
  firebaseShopName(){
    this.isLoading=true;
    return this.http.get(this.firebaseShopDataUrl).subscribe(
      (response:any)=>{
        Object.keys(response).forEach((obj)=>{
          this.arr.push(response[obj]);
        } 
        )
        this.isLoading=false;
       

      },
      (error)=>{
        this.isLoading=true;
        alert("An Error Occured Please try again");
        console.log(error);
      }
    
    )
  };
  
  
  
  
  
  
  
  
  gotoHome(){
    this.router.navigate(['home']);
  }
}
