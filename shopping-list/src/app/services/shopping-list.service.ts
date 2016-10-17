import { Injectable } from '@angular/core';
import { Item } from "../models/item";
import { items } from "../models/mock-items";

@Injectable()
export class ShoppingListService {
  getItems(): Item[] {
    return items;
  }

  addItem(item: Item): void {
    items.unshift(item);
  }

  deleteItem(item: Item): void {
    items.splice(items.indexOf(item), 1);
  }
}
