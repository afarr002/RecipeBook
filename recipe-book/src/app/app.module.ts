import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';

import { AuthInterceptorService } from './auth/auth-interceptor.service';

/*
  dynamically creating alert componenet instead of using ngIf

import { PlaceholderDirective } from './shared/directives/placeholder.directive';
*/

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    /*
  dynamically creating alert componenet instead of using ngIf
    PlaceholderDirective,
    */
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
})
export class AppModule {}
