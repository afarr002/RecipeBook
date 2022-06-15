import { Injectable } from '@angular/core';

import { Recipe } from '../shared/models/recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test description',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Test Ingredient 1', 1),
        new Ingredient('Test Ingredient 2', 20),
      ]
    ),
    new Recipe(
      'Different Test Recipe',
      'This is a different test description',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Test Ingredient 1', 1),
        new Ingredient('Test Ingredient 2', 2),
        new Ingredient('Test Ingredient 3', 5),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(i: number) {
    return this.recipes[i];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
