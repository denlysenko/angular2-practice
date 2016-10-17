import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ShoppingListService } from "../../services/shopping-list.service";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'new-item',
  template: require('./new-item.component.html')
})
export class NewItemComponent implements OnInit {
  item: Item = {name: '', amount: 0};
  itemForm: FormGroup;

  constructor(private _shoppingListService: ShoppingListService, private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.itemForm = this._formBuilder.group({
      'itemName': ['', Validators.required],
      'itemAmount': ['', Validators.compose([
        Validators.required,
        greaterZero
      ])]
    });
  }

  onClick() {
    if(this.item.name) {
      this._shoppingListService.addItem(new Item(this.item.name, this.item.amount));
      this.item.name = '';
      this.item.amount = 0;
    }
  }
}

function greaterZero(control: FormControl): {[s: string]: boolean} {
  if (control.value <= 0) {
    return {
      notEnough: true
    };
  }
}
