import { TestBed } from '@angular/core/testing';

import { MyHttpServiceService } from './my-http-service.service';

describe('MyHttpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyHttpServiceService = TestBed.get(MyHttpServiceService);
    expect(service).toBeTruthy();
  });
});
