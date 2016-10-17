import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../../models/item';
import { ShoppingListService } from "../../services/shopping-list.service";

@Component({
  selector: 'item-details',
  template: require('./item-details.component.html')
})
export class ItemDetailsComponent {
  @Input() item: Item;
  @Output() deletedItem = new EventEmitter();

  constructor(private _shoppingListService: ShoppingListService) {}

  onDelete() {
    this._shoppingListService.deleteItem(this.item);
    this.deletedItem.emit();
  }
}
