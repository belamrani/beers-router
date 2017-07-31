import { TestBed, inject } from '@angular/core/testing';

import { ComposeDeactivateGuardService } from './compose-deactivate-guard.service';

describe('ComposeDeactivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComposeDeactivateGuardService]
    });
  });

  it('should be created', inject([ComposeDeactivateGuardService], (service: ComposeDeactivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
