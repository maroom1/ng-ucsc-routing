import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeDetails } from '../../models/recipe-details';
import { RecipeDetailsService } from '../../services/recipe-details.service';
import { deepEqual } from 'assert';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { promise } from '../../../../node_modules/protractor';
import { Recipes } from '../../models/recipes';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent
//  implements OnInit 
 {
  

 

//   recipeUrl:string;
//   recipes: RecipeDetails[];
//   recipeDetail:any;

 

//   getRecipes(): void {
//     // promise.then
//     this.recipeDetailService.getRecipes().then(
//       (recipes)=>{
//         this.recipes=recipes;
//       //  console.log(this.recipes);
//     },
//       (err)=>{
//         console.log(err);
//       }
//     );
//   }

//   getRecipeDetail() {
//     for(let recipe of this.recipes) {
      
//       if(recipe.uri==this.recipeUrl)
//       {
//         this.recipeDetail=recipe;    
        
//       console.log(recipe.uri);
//     }
//     }
  
//   }

//   constructor( private activatedRoute: ActivatedRoute,private recipeDetailService: RecipeDetailsService, private _location:Location) {
//     this.getRecipes();
//    }

//   ngOnInit() {
    
//     this.activatedRoute.params.subscribe(params=>{
//       console.log(params.recipeURI);
//       this.recipeUrl=params.recipeURI;
//     });
//     this.getRecipeDetail();

//   }

//   backClicked() {
//     this._location.back();
// }
  
}
