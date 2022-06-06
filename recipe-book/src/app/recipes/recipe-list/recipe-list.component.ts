import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test description',
      'https://cdn.pixabay.com/photo/2020/08/31/12/15/meal-5532302_960_720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
