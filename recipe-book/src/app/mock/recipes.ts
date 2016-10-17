import { Recipe } from '../shared/recipe';
import { Ingredient } from '../shared/ingredient';

export let recipes: Recipe[] = [
  new Recipe(
    'Wiener Schnitzel',
    'A tasty Schnitzel',
    'http://www.gutekueche.at/img/rezept/170/wiener-schnitzel.jpg',
    [
      new Ingredient('Pork Meat', 1),
      new Ingredient('French Fries', 1),
      new Ingredient('Salad', 2)
    ]
  ),
  new Recipe(
    'Super Mega Burger',
    'Tastes so delicious!',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zJUAPsip-ZWoFBEJy3CCAu9qgU1LJfldi0LKF0kykm9KkYf10g',
    [
      new Ingredient('Buns', 4),
      new Ingredient('Salad', 1),
      new Ingredient('Paddies', 4),
      new Ingredient('Vegetables', 2)
    ]
  )
];
