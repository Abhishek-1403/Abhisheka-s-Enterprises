import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'singup-as-purchaser',
  templateUrl: './singup-as-purchaser.component.html',
  styleUrls: ['./singup-as-purchaser.component.css']
})
export class SingupAsPurchaserComponent implements OnInit {
   
  //@ViewChild ('f') userForm:any=NgForm;
  constructor(private authService:AuthenticationService) { }
  // constructor(){}

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){

    if(!form.valid){
      return;
    }
    const email =form.value.email;
    const password =form.value.password;

    this.authService.signup(email,password).subscribe(resData =>{
      console.log(resData);
    },
    error => {
      console.log(error);
    }
    
    );

    form.reset();
  }

}
