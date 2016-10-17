import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router, CanDeactivate } from '@angular/router';
import { Recipe } from '../shared/recipe';
import { RecipeService } from './recipe.service';

@Component({
  template: require('./recipe-edit.component.html')
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  recipe: Recipe;
  private _editMode = 'create';
  private _recipeIndex: number;
  private _submitted: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _recipeService: RecipeService,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  onAddItem(itemName: string, itemAmount: string) {
    // add FormArray type to preserve TS compile error
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(itemName, Validators.required),
        amount: new FormControl(itemAmount, Validators.compose([
          Validators.required,
          hasNumber,
          greaterZero
        ]))
      })
    );
  }

  onRemoveItem(index: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  onSubmit() {
    this.recipe = this.recipeForm.value;

    if (this._editMode === 'edit') {
      this._recipeService.updateRecipe(this._recipeIndex, this.recipe);
    } else {
      this._recipeService.insertRecipe(this.recipe);
    }

    this._submitted = true;
    this.navigateBack();
  }

  private navigateBack() {
    this._router.navigate(['recipes', this._recipeIndex]);
  }

  onCancel() {
    this.navigateBack();
  }

  ngOnInit() {
    let fbIngredients: FormArray = new FormArray([]);
    let fbRecipeName = '';
    let fbRecipeImageUrl = '';
    let fbRecipeContent = '';
    this._route.params.forEach((params: Params) => {
      this._editMode = params['editMode'];

      if (this._editMode === 'edit') {
        this._recipeIndex = +params['recipeIndex'];
        this.recipe = this._recipeService.getRecipe(this._recipeIndex);

        for (let i = 0; i < this.recipe.ingredients.length; i++) {
          fbIngredients.push(
            new FormGroup({
              name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
              amount: new FormControl(this.recipe.ingredients[i].amount, Validators.compose([
                Validators.required,
                hasNumber,
                greaterZero
              ]))
            })
          );
        }
        fbRecipeName = this.recipe.name;
        fbRecipeImageUrl = this.recipe.imageUrl;
        fbRecipeContent = this.recipe.content;
      }
      this.recipeForm = this._fb.group({
        name: [fbRecipeName, Validators.required],
        imageUrl: [fbRecipeImageUrl],
        content: [fbRecipeContent],
        ingredients: this._fb.array(fbIngredients.controls)
      });
    });
  }

  canDeactivate() {
    return !this._submitted && !this.recipeForm.pristine;
  }
}

function hasNumber(control: FormControl): {[s: string]: boolean} {
  if (!(('' + control.value).match('\\d+'))) {
    return { noNumber: true };
  }
}

function greaterZero(control: FormControl): {[s: string]: boolean} {
  if (!(+control.value > 0)) {
    return { tooSmall: true };
  }
}
