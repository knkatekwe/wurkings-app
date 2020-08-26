import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Listing } from './listing.model';

export interface ListingState extends EntityState<Listing, Listing> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'listing' })
export class ListingStore extends EntityStore<ListingState, Listing> {

  constructor() {
    super();
  }

}
