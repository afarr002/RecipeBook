import { Component, Input } from '@angular/core';

import { RecipeService } from 'src/app/shared/services/recipe.service';

import { Recipe } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onRecipeClick() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
