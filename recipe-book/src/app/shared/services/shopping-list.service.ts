import { Injectable } from '@angular/core';

import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Test Ingredient', 5),
    new Ingredient('Test Ingredient 2', 10),
  ];

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
