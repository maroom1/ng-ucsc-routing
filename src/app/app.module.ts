import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

const routes:Routes=[
  {path:'', component: HomeComponent, pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'foo/bar/search', component:SearchComponent},
  {path:'find',redirectTo:'search'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'recipedetail/:recipeID', component:RecipeDetailComponent},
  // {path:'recipedetail/123', component:RecipeDetailComponent}, <- this would be prefereed than above
  {path: '**',redirectTo : 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    NavbarComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
