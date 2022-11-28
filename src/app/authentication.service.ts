import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Subject, tap } from 'rxjs';
import { throwError } from 'rxjs';
import { UserToken } from './authentication.model';
import { Router } from '@angular/router';

interface authenticationResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userToken: any = new Subject<UserToken>();
  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<authenticationResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAWx3fJFG7jiY_9FPw4Aq5e4QiPc-V1fT8',
        {
          email: email,
          password: password,
          retrunSecurToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    const data = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    return this.http
      .post<authenticationResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAWx3fJFG7jiY_9FPw4Aq5e4QiPc-V1fT8',
        data
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  // autoLogin() {
  //   const userData: {
  //     email: string;
  //     id: string;
  //     _token: string;
  //     _tokenExpirationDate: string;
  //   } = JSON.parse(localStorage.getItem('userData'));

  //   if (!userData) {
  //     return;
  //   }
  //   const loadedUser = new this.userToken(
  //     userData.email,
  //     userData.id,
  //     userData._token,
  //     new Date(userData._tokenExpirationDate)
  //   );
  //   if(loadedUser.token){
  //     this.userToken.next(loadedUser);
  //   }
  // }

  logout() {
    this.userToken.next(null);
    this.router.navigate(['/login']);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new UserToken(email, userId, token, expirationDate);
    this.userToken.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occoured !';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'INVALID EMAIL';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'INCORRECT PASSWORD';
        break;
      case 'USER_DISABLED':
        errorMessage =
          'DUE TO INAPPROPRIATE BEHAVIOR YOUR ACCOUNT HAS BEEN BANED.';
        break;
      case 'EMAIL_EXISTS':
        errorMessage =
          'This email is already exists kindly continue with login mode Or try with another Email.';
    }
    return throwError(errorMessage);
  }
}
