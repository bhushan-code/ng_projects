import { TestBed } from '@angular/core/testing';

import { VampService } from './vamp.service';

describe('VampService', () => {
  let service: VampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
