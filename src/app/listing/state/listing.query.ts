import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ListingStore, ListingState } from './listing.store';
import { Listing } from 'src/app/core';

@Injectable({ providedIn: 'root' })
export class ListingQuery extends QueryEntity<ListingState, Listing> {

  constructor(protected store: ListingStore) {
    super(store);
  }

}
