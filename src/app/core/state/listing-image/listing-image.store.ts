import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ListingImage } from './listing-image.model';

export interface ListingImageState extends EntityState<ListingImage> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'listing-image' })
export class ListingImageStore extends EntityStore<ListingImageState, ListingImage> {

  constructor() {
    super();
  }

}
