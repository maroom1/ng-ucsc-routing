import { TestBed, inject } from '@angular/core/testing';

import { RecipeDetailsService } from './recipe-details.service';

describe('RecipeDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeDetailsService]
    });
  });

  it('should be created', inject([RecipeDetailsService], (service: RecipeDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
