import { Routes } from '@angular/router';
import { RecipesComponent } from './recipe-book/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/recipes' },
  { path: 'shopping-list', component:  ShoppingListComponent }
];
