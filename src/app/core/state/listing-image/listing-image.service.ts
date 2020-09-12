import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID, cacheable } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { ListingImage } from './listing-image.model';
import { ListingImageStore } from './listing-image.store';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../..';

@Injectable({ providedIn: 'root' })
export class ListingImageService {

  constructor(private store: ListingImageStore, private http: HttpClient) {
  }


  get(): Observable<ListingImage[]> {
		const request$ = this.http
			.get<ListingImage[]>(API_ENDPOINT + '/listingImages')
			.pipe(tap((entities) => this.store.set(entities)));

		return cacheable(this.store, request$);
  }

  getListingImage(id): Observable<ListingImage>{
    return this.http.get<ListingImage>(API_ENDPOINT + '/listingImage/' + id)
  }

	add(listing:ListingImage, listingId): Observable<ListingImage> {
    const formData = new FormData();
    formData.append('image_url', listing.image_url);
    formData.append('alt', listing.alt);
    console.log(formData)
		return this.http.post<ListingImage>(API_ENDPOINT + '/listing/' + listingId + '/listingImage', formData).pipe(
			tap((listing) => {
				this.store.add(listing);
			})
		);
	}

	delete(id): Observable<any> {
		return this.http.delete(API_ENDPOINT + '/listingImage/' + id).pipe(
			tap((listing) => {
				this.store.remove(id);
			})
		);
	}

	update(id, listing: ListingImage): Observable<any> {
		return this.http.put(API_ENDPOINT + '/listing/' + id, listing).pipe(
			tap((listing) => {
				this.store.update(id, listing);
			})
		);
	}

}
