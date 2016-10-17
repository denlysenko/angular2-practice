import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit.component';
import { RecipesComponent } from './recipe-book/recipes.component';
import { RecipeListComponent } from './recipe-book/recipe-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit.component';
import { routes } from './app.routes';
import { ShoppingListService } from './shared/shopping-list.service';
import { RecipeService } from './recipe-book/recipe.service';
import { recipeRoutes } from './recipe-book/recipes.routing';
import { RecipeEditDeactivateGuardService } from './recipe-book/recipe-edit-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(recipeRoutes)
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeEditDeactivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
