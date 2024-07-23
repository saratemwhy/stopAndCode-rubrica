import { TestBed } from '@angular/core/testing';

import { RubricaSService } from './rubrica-s.service';

describe('RubricaSService', () => {
  let service: RubricaSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RubricaSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
