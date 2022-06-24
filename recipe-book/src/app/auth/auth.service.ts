import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

/*
AuthResponseData is the format of the data that we will receive back from the backend - defining it helps typescript receive wihtout errors
*/

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDb6jXvssSwUVNbAQcjwQRrJlbkxi4O2H4',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
