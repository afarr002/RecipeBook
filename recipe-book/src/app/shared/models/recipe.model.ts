export class Recipe {
  public name: String;
  public description: String;
  public imgSrc: string;

  constructor(name: string, description: string, imgSrc: string) {
    this.name = name;
    this.description = description;
    this.imgSrc = imgSrc;
  }
}
