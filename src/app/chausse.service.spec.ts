import { TestBed } from '@angular/core/testing';

import { ChausseService } from './chausse.service';

describe('ChausseService', () => {
  let service: ChausseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChausseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
