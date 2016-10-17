import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit.component';
import { RecipeEditDeactivateGuardService } from './recipe-edit-deactivate-guard.service';

export const recipeRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeDetailComponent },
      { path: ':recipeIndex', component: RecipeDetailComponent },
      { path: ':recipeIndex/:editMode', component: RecipeEditComponent, canDeactivate: [RecipeEditDeactivateGuardService] }
    ]
  }
];
