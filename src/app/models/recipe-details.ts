export class RecipeDetails{

  public uri: string;
  public label: string;
  public image: string;
  public source: string;
  public url: string;
  public shareAs: string;
  public yield: number;
  public dietLabels : any [];
  public healthLabels: string [];
  public cautions : any[];
  public ingredientLines: any[];
  public ingredients: any[];
  public calories: number;
  public totalWeight: number;
  public totalTime: number;
  public totalNutrients: object;
  public totalDaily: object;
  public digest: any [];

  constructor() {}


}
