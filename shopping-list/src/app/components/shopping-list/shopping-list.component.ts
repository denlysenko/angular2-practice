import { Component, OnInit } from '@angular/core';

import { NewItemComponent } from '../new-item/new-item.component';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { Item } from '../../models/item';

import './shopping-list.component.scss';
import { ShoppingListService } from "../../services/shopping-list.service";

@Component({
  selector: 'shopping-list',
  template: require('./shopping-list.component.html'),
  directives: [ NewItemComponent, ItemDetailsComponent ]
})
export class ShoppingListComponent implements OnInit {
  items: Item[];
  selectedItem: Item;

  constructor(private _shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.items = this._shoppingListService.getItems();
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  unselectItem() {
    this.selectedItem = null;
  }
}
