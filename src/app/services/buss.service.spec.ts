import { TestBed } from '@angular/core/testing';

import { BussService } from './buss.service';

describe('BussService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BussService = TestBed.get(BussService);
    expect(service).toBeTruthy();
  });
});
