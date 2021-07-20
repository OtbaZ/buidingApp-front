import { TestBed } from '@angular/core/testing';

import { DispositifService } from './dispositif.service';

describe('DispositifService', () => {
  let service: DispositifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispositifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
