import { Injectable } from '@angular/core';
import { ListingStore} from './listing.store';
import { API_ENDPOINT } from 'src/app/core';
import { HttpClient } from '@angular/common/http';
import { Listing } from './listing.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { cacheable } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class ListingService {
	constructor(protected store: ListingStore, private http: HttpClient) {}

	get(): Observable<Listing[]> {
		const request$ = this.http
			.get<Listing[]>(API_ENDPOINT + '/listings')
			.pipe(tap((entities) => this.store.set(entities)));

		return cacheable(this.store, request$);
  }

  getUserListings(): Observable<Listing[]>{
    return this.http.get<Listing[]>(API_ENDPOINT + '/user_listings')
  }

  getListing(id): Observable<Listing>{
    return this.http.get<Listing>(API_ENDPOINT + '/listing/' + id)
  }

	add(listing: Listing): Observable<Listing> {
		return this.http.post<Listing>(API_ENDPOINT + '/listing', listing).pipe(
			tap((listing) => {
				this.store.add(listing);
			})
		);
  }

	delete(id): Observable<any> {
		return this.http.delete(API_ENDPOINT + '/listing/' + id).pipe(
			tap((listing) => {
				this.store.remove(id);
			})
		);
	}

	update(id, listing: Listing): Observable<any> {
		return this.http.put(API_ENDPOINT + '/listing/' + id, listing).pipe(
			tap((listing) => {
				this.store.update(id, listing);
			})
		);
	}

}
