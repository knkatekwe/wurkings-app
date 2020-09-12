import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ListingImageStore, ListingImageState } from './listing-image.store';
import { ListingImage } from './listing-image.model';

@Injectable({ providedIn: 'root' })
export class ListingImageQuery extends QueryEntity<ListingImageState, ListingImage> {

  constructor(protected store: ListingImageStore) {
    super(store);
  }

  // getListingImages(value: string) {
  //   return this.selectAll({
  //     filterBy: entity => entity.image_url.toLowerCase().includes(value)
  //   });
  // }

}
