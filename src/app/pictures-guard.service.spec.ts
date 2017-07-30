import { TestBed, inject } from '@angular/core/testing';

import { PicturesGuardService } from './pictures-guard.service';

describe('PicturesGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PicturesGuardService]
    });
  });

  it('should be created', inject([PicturesGuardService], (service: PicturesGuardService) => {
    expect(service).toBeTruthy();
  }));
});
