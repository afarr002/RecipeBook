import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLoginModeSwitch() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.isLoading = true;
    if (this.loginMode) {
      // add login logic here
    } else {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signup(email, password).subscribe(
        (res) => {
          console.log(res);
          this.isLoading = false;
        },
        (err) => {
          console.log(err.error.error.message);
          this.error = `An error has occured: ${err.error.error.message}`;
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }
}
