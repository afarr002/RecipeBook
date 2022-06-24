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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLoginModeSwitch() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    if (this.loginMode) {
      // add login logic here
    } else {
      const email = form.value.email;
      const password = form.value.password;
      this.authService.signup(email, password).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }
    form.reset();
  }
}