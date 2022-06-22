import { Ingredient } from './ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imgSrc: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    description: string,
    imgSrc: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imgSrc = imgSrc;
    this.ingredients = ingredients;
  }
}
