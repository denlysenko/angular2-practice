import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  template: require('./shopping-list.component.html'),
  styles: [require('./shopping-list.component.scss')]
})
export class ShoppingListComponent implements OnInit {
  shoppingList: Ingredient[];
  selectedItem: Ingredient;
  selectedItemIndex: number;

  constructor(private _shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingList = this._shoppingListService.getAllItems();
  }

  selectItem(item: Ingredient): void {
    this.selectedItem = item;
    this.selectedItemIndex = this._shoppingListService.getIndexOfItem(item);
  }

  onAddItem(): void {
    this.selectedItem = null;
  }
}
