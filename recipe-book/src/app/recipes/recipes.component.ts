import { Component, OnDestroy, OnInit } from '@angular/core';

import { Recipe } from '../shared/models/recipe.model';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent {}
