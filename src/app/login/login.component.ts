import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logoUrl = 'assets/logo.png';

  @ViewChild('f') loginForm: any = NgForm;

  constructor(private authService: AuthenticationService,private router:Router) {}

  ngOnInit(): void {}

  error: string = '';
  isLoading = false;

  goToSignUp() {}
  onSubmit(form: NgForm) {
    
    if (!form.valid) {
      return;
    }
    const email = form.value.username;
    const password = form.value.password;

    this.isLoading = true;
    
   
    this.authService.login(email, password).subscribe(
      (resData) => {
        this.isLoading = false;
        this.router.navigate(['/home']);
      },
      (errorMessage) => {
      
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
    this.loginForm.reset();
  }
}
