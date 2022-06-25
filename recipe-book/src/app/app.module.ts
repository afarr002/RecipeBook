import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlertComponent } from './shared/alert/alert.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { DropdownDirective } from './shared/directives/dropdown.directive';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

/*
  dynamically creating alert componenet instead of using ngIf

import { PlaceholderDirective } from './shared/directives/placeholder.directive';
*/

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AuthComponent,
    HeaderComponent,
    LoadingSpinnerComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipeStartComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    DropdownDirective,
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
