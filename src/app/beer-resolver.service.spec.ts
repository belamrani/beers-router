import { TestBed, inject } from '@angular/core/testing';

import { BeerResolverService } from './beer-resolver.service';

describe('BeerResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerResolverService]
    });
  });

  it('should be created', inject([BeerResolverService], (service: BeerResolverService) => {
    expect(service).toBeTruthy();
  }));
});
