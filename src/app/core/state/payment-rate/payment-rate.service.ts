import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID, cacheable } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { PaymentRate } from './payment-rate.model';
import { PaymentRateStore } from './payment-rate.store';
import { API_ENDPOINT } from '../..';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaymentRateService {
	constructor(private store: PaymentRateStore, private http: HttpClient) {}

	get(): Observable<PaymentRate[]> {
		const request$ = this.http
			.get<PaymentRate[]>(API_ENDPOINT + '/paymentRates')
			.pipe(tap((entities) => this.store.set(entities)));

		return cacheable(this.store, request$);
	}

	getPaymentRate(id): Observable<PaymentRate> {
		return this.http.get<PaymentRate>(API_ENDPOINT + '/paymentRate/' + id);
	}

	add(paymentRate: PaymentRate, listingId): Observable<PaymentRate> {
		return this.http.post<PaymentRate>(API_ENDPOINT + '/listing/' + listingId + '/paymentRate', paymentRate).pipe(
			tap((listing) => {
				this.store.add(listing);
			})
		);
	}

	delete(id): Observable<any> {
		return this.http.delete(API_ENDPOINT + '/paymentRate/' + id).pipe(
			tap((listing) => {
				this.store.remove(id);
			})
		);
	}

	update(id, paymentRate: PaymentRate): Observable<any> {
		return this.http.put(API_ENDPOINT + '/paymentRate/' + id, paymentRate).pipe(
			tap((paymentRate) => {
				this.store.update(id, paymentRate);
			})
		);
	}
}
