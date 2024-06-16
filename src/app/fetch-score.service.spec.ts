import { TestBed } from '@angular/core/testing';

import { FetchScoreService } from './fetch-score.service';

describe('FetchScoreService', () => {
  let service: FetchScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchScoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
