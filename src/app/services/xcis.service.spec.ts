import { TestBed } from '@angular/core/testing';

import { XcisService } from './xcis.service';

describe('XcisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XcisService = TestBed.get(XcisService);
    expect(service).toBeTruthy();
  });
});
