import { Component, OnInit, Input, Output } from '@angular/core';
import { RecipeDetailsService } from '../../services/recipe-details.service';
import { RecipeDetails } from '../../models/recipe-details';
import { SearchResults } from '../../models/search-results';

declare var $:any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 searchTerm:string='';
 searchResults:SearchResults[]=[new SearchResults("test","test Results will display here")];
  recipes: RecipeDetails[];

  //Method called on the lifecyle hook
  //leverage the service to call the getrecipes method
  //returns a promise
  getRecipes(searchWord:string): void {
    // promise.then
    /*this.recipeDetailService.getRecipes().then(
      (recipes)=>{
        this.recipes=recipes;
        console.log(this.recipes);
    },
      (err)=>{
        console.log(err);
      }
    );*/
    if(searchWord){
    console.log("searching for word : "+searchWord)
    
    this.recipeDetailService.getRecipesFromObservable(searchWord)
    .subscribe(data =>{
      let datahits=data['hits'];
      // console.log(datahits);
      this.searchResults=datahits.map(item=>{
        //console.log(new SearchResults(item.recipe.uri,item.recipe.label));
        return new SearchResults(item.recipe.uri,item.recipe.label)})
        console.log(this.searchResults);
      return this.searchResults})
    } else {
      console.log("no search term provided")
    }

  }
  constructor(private recipeDetailService: RecipeDetailsService) { }

  ngOnInit() {
    this.getRecipes(this.searchTerm);
    $( "#btm" ).click(function() {
      alert( "Handler for .select() called." );
    });   
  }

  

}
