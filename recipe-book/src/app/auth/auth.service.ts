import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';

import { User } from './user.model';

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
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

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
        catchError(this.errorHandling),
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
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDb6jXvssSwUVNbAQcjwQRrJlbkxi4O2H4',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandling),
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

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    } else {
      const loadedUser = new User(
        userData.email,
        userData.id,
        userData._token,
        new Date(userData._tokenExpirationDate)
      );

      if (loadedUser.token) {
        this.user.next(loadedUser);

        const expirationDuration =
          new Date(userData._tokenExpirationDate).getTime() -
          new Date().getTime();
        this.autoLogout(expirationDuration);
      }
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);

    localStorage.removeItem('userData'); // clear user's data from local storage to remove user's authentication (token) when they log out
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(
      () => this.logout(),
      expirationDuration
    );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const tokenExp = new Date(new Date().getTime() + expiresIn * 1000); // creates a date for the token expiration since it is returned to us in seconds from firebase
    const user = new User(email, userId, token, tokenExp);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private errorHandling(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error has occured, try again later!';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'A user with this email already exists!';
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage =
          'Too many incorrect attempts have been made, try again later!';
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          'There is no user with this email/password combo, please check password or signup!';
      case 'INVALID_PASSWORD':
        errorMessage =
          'There is no user with this email/password combo, please check password or signup!';
      case 'USER_DISABLED':
        errorMessage =
          'This account has been locked, please contect an administrator!';
    }
    return throwError(() => new Error(errorMessage));
  }
}
