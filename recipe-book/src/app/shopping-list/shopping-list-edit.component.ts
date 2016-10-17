import { Component, Input } from '@angular/core';

import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'shopping-list-edit',
  template: require('./shopping-list-edit.component.html')
})
export class ShoppingListEditComponent {
  @Input() ingredient: Ingredient;
  @Input() index: number;

  constructor(private _shoppingListService: ShoppingListService) {}

  onSubmit(form) {
    if (this.ingredient) {
      this._shoppingListService.updateItem(this.index, {name: form.value.itemName, amount: form.value.itemAmount});
      this.ingredient = null;
    } else {
      this._shoppingListService.insertItem(
        new Ingredient(form.value.itemName, form.value.itemAmount)
      );
      form.reset();
    }
  }

  onDelete() {
    this._shoppingListService.deleteItem(this.ingredient);
    this.ingredient = null;
  }
}
