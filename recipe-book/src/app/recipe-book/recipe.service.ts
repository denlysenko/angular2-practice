import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { recipes } from '../mock/recipes';

@Injectable()
export class RecipeService {
  getAllRecipes(): Recipe[] {
    return recipes;
  }

  getRecipe(index: number): Recipe {
    return recipes[index];
  }

  getRecipeIndex(item: Recipe): number {
    return recipes.indexOf(item);
  }

  insertRecipe(item: Recipe): void {
    recipes.push(item);
  }

  deleteRecipe(item: Recipe): void {
    recipes.splice(recipes.indexOf(item), 1);
  }

  updateRecipe(index: number, item: Recipe): void {
    recipes[index] = item;
  }
}