import { TestBed } from '@angular/core/testing';

import { TerrassementService } from './terrassement.service';

describe('TerrassementService', () => {
  let service: TerrassementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerrassementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
