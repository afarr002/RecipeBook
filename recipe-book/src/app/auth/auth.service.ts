import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
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
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDb6jXvssSwUVNbAQcjwQRrJlbkxi4O2H4',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An unknown error has occured, try again later!';

          if (!errorRes.error || !errorRes.error.error) {
            return throwError(() => new Error(errorMessage));
          }
          switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'A user with this email already exists!';
            case 'OPERATION_NOT_ALLOWED':
              errorMessage = 'Password sign-in is disabled!';
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              errorMessage =
                'Too many incorrect attempts have been made, try again later!';
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDb6jXvssSwUVNbAQcjwQRrJlbkxi4O2H4',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
