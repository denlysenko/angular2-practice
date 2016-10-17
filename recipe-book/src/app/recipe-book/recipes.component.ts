import { Component } from '@angular/core';
import { Recipe } from '../shared/recipe';

@Component({
  template: require('./recipes.component.html')
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}