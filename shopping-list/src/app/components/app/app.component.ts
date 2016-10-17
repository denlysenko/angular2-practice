import { Component } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListService } from "../../services/shopping-list.service";

@Component({
  selector: 'shopping-list-app',
  template: require('./app.component.html'),
  directives: [ ShoppingListComponent ],
  providers: [ ShoppingListService ]
})
export class AppComponent {
  public title: string;

  constructor() {
    this.title = 'Shopping List';
  }
}
