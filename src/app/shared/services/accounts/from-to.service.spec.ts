import { TestBed } from '@angular/core/testing';

import { FromToService } from './from-to.service';

describe('FromToService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FromToService = TestBed.get(FromToService);
    expect(service).toBeTruthy();
  });
});
