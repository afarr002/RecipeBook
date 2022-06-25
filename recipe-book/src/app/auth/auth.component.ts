import { Component, OnInit } from '@angular/core';
/*
  dynamically creating alert componenet instead of using ngIf
        
  ComponentFactoryResolver, ViewChild imported from @angular/core
*/
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

/*
  dynamically creating alert componenet instead of using ngIf
        
  Subscription imported from rxjs
*/

import { AuthResponseData, AuthService } from './auth.service';
/*
  dynamically creating alert componenet instead of using ngIf
        
  import { AlertComponent } from "../shared/alert/alert.component"
  import { PlaceholderDirective } from "../shared/directives/placeholder.directive"
*/

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
/*
  dynamically creating alert componenet instead of using ngIf

  implements onDestroy
*/
export class AuthComponent implements OnInit {
  loginMode = true;
  isLoading = false;
  error: string = null;
  /*
  dynamically creating alert componenet instead of using ngIf

  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  private closeSubscription: Subscription;
  */

  constructor(private authService: AuthService, private router: Router) /*
    dynamically creating alert componenet instead of using ngIf
        
    private componentFactoryResolver: ComponentFactoryResolver
  */ {}

  ngOnInit(): void {}

  onLoginModeSwitch() {
    this.loginMode = !this.loginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.loginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        /*
        dynamically creating alert componenet instead of using ngIf
        -*- note: you would get rid of the this.error = errorMessage line about using this approach -*-

        this.showErrorAlert(errorMessage);
    */

        this.isLoading = false;
      },
    });

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  /*
  dynamically creating alert componenet instead of using ngIf

  private showErrorAlert(message: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolverComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);

    componentRef.instance.message = message;
    this.closeSubscription = componentRef.instance.close.subscribe(
      () => {
        this.closeSubscription.unsubscribe();
        hostViewContainerRef.clear();
      }
    );

  }

  ngOnDestroy() {
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }

*/
}
