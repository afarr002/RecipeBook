import { Ingredient } from './ingredient.model';

export class Recipe {
  public name: String;
  public description: String;
  public imgSrc: String;
  public ingredients: Ingredient[];

  constructor(
    name: String,
    description: String,
    imgSrc: String,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imgSrc = imgSrc;
    this.ingredients = ingredients;
  }
}
