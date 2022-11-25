import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface authenticationResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<authenticationResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAWx3fJFG7jiY_9FPw4Aq5e4QiPc-V1fT8',
      {
        email:email,
        password:password,
        retrunSecurToken:true
      }
    );
  }
}
