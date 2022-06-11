import { Ingredient } from './ingredient.model';

export class Recipe {
  public name: String;
  public description: String;
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
  }
}
