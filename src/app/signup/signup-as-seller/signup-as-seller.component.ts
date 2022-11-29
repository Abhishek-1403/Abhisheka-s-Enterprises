import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-as-seller',
  templateUrl: './signup-as-seller.component.html',
  styleUrls: ['./signup-as-seller.component.css']
})
export class SignupAsSellerComponent implements OnInit {
  // @ViewChild ('f') sellerForm:any=NgForm
  constructor( private authService: AuthenticationService,
    private router: Router ) { }

  ngOnInit() {}


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

