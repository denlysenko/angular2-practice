import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { shoppingList } from '../mock/shopping-list';

@Injectable()
export class ShoppingListService {
  getAllItems(): Ingredient[] {
    return shoppingList;
  }

  getItem(index: number): Ingredient {
    return shoppingList[index];
  }

  getIndexOfItem(item: Ingredient): number {
    return shoppingList.indexOf(item);
  }

  insertItem(item: Ingredient): void {
    shoppingList.push(item);
  }

  insertItems(items: Ingredient[]): void {
    Array.prototype.push.apply(shoppingList, items);
  }

  deleteItem(item: Ingredient): void {
    shoppingList.splice(shoppingList.indexOf(item), 1);
  }

  updateItem(index: number, item: Ingredient): void {
    shoppingList[index] = item;
  }
}
