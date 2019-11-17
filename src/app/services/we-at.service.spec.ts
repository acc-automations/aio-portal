import { TestBed } from '@angular/core/testing';

import { WeAtService } from './we-at.service';

describe('WeAtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeAtService = TestBed.get(WeAtService);
    expect(service).toBeTruthy();
  });
});
