import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable, identity } from 'rxjs';

import { ApiService } from './api.service';
// import { Listing, ListingListConfig } from '../models';
import { map } from 'rxjs/operators';
import { Listing, ListingListConfig } from '..';

@Injectable()
export class ListingsService {
  constructor(
    private apiService: ApiService
  ) {}

  query(config: ListingListConfig): Observable<any> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};

    Object.keys(config.filters)
    .forEach((key) => {
      params[key] = config.filters[key];
    });

    return this.apiService
    .get(
      '/listings' + ((config.type === 'feed') ? '/feed' : ''),
      new HttpParams({ fromObject: params })
    );
  }

  get(id): Observable<Listing> {
    return this.apiService.get('/listings/' + id)
      .pipe(map(data => data));
  }

  destroy(id) {
    return this.apiService.delete('/listings/' + id);
  }

  save(listing): Observable<Listing> {
    // If we're updating an existing listing
    if (listing.id) {
      return this.apiService.put('/listings/' + listing.id, {listing: listing})
        .pipe(map(data => listing));

    // Otherwise, create a new listing
    } else {
      return this.apiService.post('/listings/', {listing: listing})
        .pipe(map(data => listing));
    }
  }

  favorite(id): Observable<Listing> {
    return this.apiService.post('/listings/' + id + '/favorite');
  }

  unfavorite(id): Observable<Listing> {
    return this.apiService.delete('/listings/' + id + '/favorite');
  }


}
