import { Component } from '@angular/core';

import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Test Ingredient', 5),
    new Ingredient('Test Ingredient 2', 10),
  ];

  onIngredientAdded(addedIngredient: Ingredient) {
    this.ingredients.push(addedIngredient);
  }
}
