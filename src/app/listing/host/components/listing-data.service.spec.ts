import { TestBed } from '@angular/core/testing';

import { ListingDataService } from './listing-data.service';

describe('ListingDataService', () => {
  let service: ListingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
