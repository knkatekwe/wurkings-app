import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cacheable } from '@datorama/akita';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { API_ENDPOINT } from '../..';
import { Booking } from './booking.model';
import { BookingStore } from './booking.store';

@Injectable({ providedIn: 'root' })
export class BookingService {
	constructor(private store: BookingStore, private http: HttpClient) {}

	get(): Observable<Booking[]> {
		const request$ = this.http
			.get<Booking[]>(API_ENDPOINT + '/bookings')
			.pipe(tap((entities) => this.store.set(entities)));

		return cacheable(this.store, request$);
	}

	getUserBookings(): Observable<Booking[]> {
		return this.http.get<Booking[]>(API_ENDPOINT + '/user_bookings');
	}

	getBooking(bookingId): Observable<Booking> {
		return this.http.get<Booking>(API_ENDPOINT + `/booking/${bookingId}`);
	}

	add(listingId, booking: Booking): Observable<Booking> {
		return this.http.post<Booking>(API_ENDPOINT + `/listing/${listingId}/booking`, booking).pipe(
			tap((booking) => {
				this.store.add(booking);
			})
		);
	}

	delete(listingId): Observable<any> {
		return this.http.delete(API_ENDPOINT + `/booking/${listingId}`).pipe(
			tap((booking) => {
				this.store.remove(listingId);
			})
		);
	}

	update(bookingId, booking: Booking): Observable<any> {
		return this.http.post(API_ENDPOINT + `/booking/${bookingId}`, booking).pipe(
			tap((booking) => {
				this.store.update(bookingId, booking);
			})
		);
  }

  acceptBooking(bookingId, booking: Booking): Observable<any> {
		return this.http.post(API_ENDPOINT + `/booking/${bookingId}/accept`, booking).pipe(
			tap((booking) => {
				this.store.update(bookingId, booking);
			})
		);
  }

  cancelBooking(bookingId, booking: Booking): Observable<any> {
		return this.http.post(API_ENDPOINT + `/booking/${bookingId}/cancel`, booking).pipe(
			tap((booking) => {
				this.store.update(bookingId, booking);
			})
		);
	}
}
