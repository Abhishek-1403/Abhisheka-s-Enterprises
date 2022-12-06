import { Component, OnDestroy, OnInit } from '@angular/core';

import { AuthenticationService } from './shared/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AbhishekasEnterprises';

  isAuthenticated = false;

  private userSub: any;
  constructor(
    private authService: AuthenticationService,
   
  ) {}

  ngOnInit() {
    // this.homeService.getData();

    this.userSub = this.authService.userToken.subscribe((user: any) => {
      this.isAuthenticated = !!user;

      console.log(!user);
      console.log(!!user);
    });
    this.authService.autoLogin();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  logout() {
    this.authService.logout();
  }
}
