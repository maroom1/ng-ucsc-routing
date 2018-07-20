// $ ng g s recipeDetails
import { Injectable } from '@angular/core';
import { RecipeDetails } from '../models/recipe-details';
import { Recipes } from '../models/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailsService {

  constructor() { }
// returns a actual data from recipes
  getRecipes(): Promise<RecipeDetails[]>{
    return Promise.resolve(Recipes);
    //return Promise.reject("something bad has happened...!!!")
  }
}
