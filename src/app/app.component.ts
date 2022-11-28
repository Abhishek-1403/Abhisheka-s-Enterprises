import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'AbhishekasEnterprises';

  isAuthenticated = false;
  

  private userSub:any;
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.userSub = this.authService.userToken.subscribe((user: any) => {
      this.isAuthenticated = !!user; 
      console.log(user);
      console.log(!user);
      console.log(!!user);
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
  logout(){
    this.authService.logout();
  }
}
