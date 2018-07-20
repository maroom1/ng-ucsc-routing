import { Component, OnInit } from '@angular/core';
import { RecipeDetailsService } from '../../services/recipe-details.service';
import { RecipeDetails } from '../../models/recipe-details';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  recipes: RecipeDetails[];

  //Method called on the lifecyle hook
  //leverage the service to call the getrecipes method
  //returns a promise
  getRecipes(): void {
    // promise.then
    this.recipeDetailService.getRecipes().then(
      (recipes)=>{
        this.recipes=recipes;
        console.log(this.recipes);
    },
      (err)=>{
        console.log(err);
      }
    );

  }
  constructor(private recipeDetailService: RecipeDetailsService) { }

  ngOnInit() {
    this.getRecipes();
  }

}
