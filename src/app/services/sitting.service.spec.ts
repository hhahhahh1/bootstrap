import { TestBed } from '@angular/core/testing';

import { SittingService } from './sitting.service';

describe('SittingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SittingService = TestBed.get(SittingService);
    expect(service).toBeTruthy();
  });
});
