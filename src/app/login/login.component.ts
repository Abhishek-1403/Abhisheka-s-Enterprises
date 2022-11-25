import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logoUrl="assets/logo.png";

  @ViewChild('f') loginForm:any=NgForm;

  constructor() { }

  ngOnInit(): void {
  }
    
  
  goToSignUp(){
    
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.loginForm.reset();

  }

}
