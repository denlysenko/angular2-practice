import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'recipe-detail',
  template: require('./recipe-detail.component.html'),
  styles: [require('./recipe-detail.component.scss')]
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  private itemIndex: string;

  constructor(
    private _route: ActivatedRoute,
    private _recipeService: RecipeService,
    private _router: Router,
    private _shoppingListService: ShoppingListService
  ) {}

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let itemIndex = params['recipeIndex'];
      this.itemIndex = itemIndex;
      this.recipe = this._recipeService.getRecipe(itemIndex) || null;
    });
  }

  onEdit() {
    this._router.navigate(['edit'], { relativeTo: this._route });
  }

  onDelete() {
    this._recipeService.deleteRecipe(this.recipe);
    this._router.navigate(['recipes']);
  }

  onAddToShoppingList() {
    this._shoppingListService.insertItems(this.recipe.ingredients);
  }
}
