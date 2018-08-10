// $ ng g s recipeDetails
import { Injectable } from '@angular/core';
import { RecipeDetails } from '../models/recipe-details';
import { Recipes } from '../models/recipes';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipeDetailsService {

  appID:string = 'a4470700';
  appKey:string='e0a8886c56879bec44f78b7c9cf4b250';
  apiRoot:string='https://api.edamam.com/search';

  results:RecipeDetails[];
constructor(private httpClient:HttpClient){

}

getRecipesFromPromise():Promise<RecipeDetails[]>{
  return Promise.resolve(Recipes);
}

getRecipesFromObservable(query:string){
  let myQuery=query; //||'protein';
  let apiUrl=`${this.apiRoot}?q=${myQuery}&app_id=${this.appID}&app_key=${this.appKey}&from=0&to=50&health=vegan`;
  return this.httpClient.get(apiUrl);
}

ngOnInit(): void {
  throw new Error("Method not implemented.");
}
}

//   constructor() { }
// // returns a actual data from recipes
//   getRecipes(): Promise<RecipeDetails[]>{
//     return Promise.resolve(Recipes);
//     //return Promise.reject("something bad has happened...!!!")
//   }
// }
