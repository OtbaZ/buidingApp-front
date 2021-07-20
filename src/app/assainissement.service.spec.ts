import { TestBed } from '@angular/core/testing';

import { AssainissementService } from './assainissement.service';

describe('AssainissementService', () => {
  let service: AssainissementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssainissementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
