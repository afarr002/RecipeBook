import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AuthInterceptorService } from './auth/auth-interceptor.service';

/*
  dynamically creating alert componenet instead of using ngIf

import { PlaceholderDirective } from './shared/directives/placeholder.directive';
*/

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    /*
  dynamically creating alert componenet instead of using ngIf
    PlaceholderDirective,
    */
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    HttpClientModule,
    RecipesModule,
    SharedModule,
    ShoppingListModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  /*
    dynamically creating alert componenet instead of using ngIf
    -*- note: this is only needed if you are using angular version 9 or before!  -*-

    entryComponents: [
      AlertComponent
    ]

  */

  /*

    you can create a core module to house mulitple services IF you are importing mulitple services into the providers within the app module.
    all the services in my app are injected to root (provided: 'inRoot') in the service files, so it is not neccesary here

  */
})
export class AppModule {}
