import { Ingredient } from './ingredient';

export class Recipe {
  constructor(
    public name: string,
    public content: string,
    public imageUrl: string,
    public ingredients: Ingredient[]
  ) {}
}
