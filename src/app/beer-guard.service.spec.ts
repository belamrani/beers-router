import { TestBed, inject } from '@angular/core/testing';

import { MajorGuardService } from './beer-guard.service';

describe('MajorGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajorGuardService]
    });
  });

  it('should be created', inject([MajorGuardService], (service: MajorGuardService) => {
    expect(service).toBeTruthy();
  }));
});
