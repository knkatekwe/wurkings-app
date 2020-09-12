import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ListingStore, ListingState } from './listing.store';
import { Listing } from './listing.model';

@Injectable({ providedIn: 'root' })
export class ListingQuery extends QueryEntity<ListingState, Listing> {

  constructor(protected store: ListingStore) {
    super(store);
  }

  getListings(value: string) {
    return this.selectAll({
      filterBy: entity => entity.title.toLowerCase().includes(value)
    });
  }

}
