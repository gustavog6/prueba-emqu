import { TestBed } from '@angular/core/testing';

import { TesterChangeService } from './tester-change.service';

describe('TesterChangeService', () => {
  let service: TesterChangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesterChangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
