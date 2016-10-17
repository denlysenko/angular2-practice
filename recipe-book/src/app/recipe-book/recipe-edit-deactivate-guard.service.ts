import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { RecipeEditComponent } from './recipe-edit.component';

@Injectable()
export class RecipeEditDeactivateGuardService implements CanDeactivate<RecipeEditComponent> {
  canDeactivate(target: RecipeEditComponent) {
    return target.canDeactivate() ? window.confirm('Sure?') : true;
  }
}
