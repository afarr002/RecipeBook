import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from '../../shared/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test description',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'Different Test Recipe',
      'This is a different test description',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() {}
}
