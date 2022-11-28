import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'singup-as-purchaser',
  templateUrl: './singup-as-purchaser.component.html',
  styleUrls: ['./singup-as-purchaser.component.css'],
})
export class SingupAsPurchaserComponent implements OnInit {
  //@ViewChild ('f') userForm:any=NgForm;
  constructor(
    private authService: AuthenticationService,
    private router: Router 
  ) {}
  // constructor(){}

  ngOnInit(): void {}

  error: string = '';
  isLoading = false;
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    this.authService.signup(email, password).subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;

        //this.error = "An error occoured";

        this.isLoading = false;
      }
    );

    form.reset();
  }
}
