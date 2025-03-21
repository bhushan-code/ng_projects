import { TestBed } from '@angular/core/testing';

import { CDataService } from './cdata.service';

describe('CDataService', () => {
  let service: CDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
