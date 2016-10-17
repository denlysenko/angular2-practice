import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RecipeService } from './recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'recipe-list',
  template: require('./recipe-list.component.html'),
  styles: [require('./recipe-list.component.scss')]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private _recipeService: RecipeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes = this._recipeService.getAllRecipes();
  }

  selectItem(recipe: Recipe) {
    this._router.navigate([this._recipeService.getRecipeIndex(recipe)], { relativeTo: this._route });
  }

  onAddRecipe() { // TODO rework navigation to not pass an empty string as parameter
    this._router.navigate(['recipes', '', 'create']);
  }
}
