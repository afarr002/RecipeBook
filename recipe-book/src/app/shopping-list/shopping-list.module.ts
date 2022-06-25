import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [ShoppingEditComponent, ShoppingListComponent],
  imports: [CommonModule, FormsModule, RouterModule, ShoppingListRoutingModule],
})
export class ShoppingListModule {}
