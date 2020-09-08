import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { PaymentRate } from './payment-rate.model';
import { PaymentRateStore } from './payment-rate.store';

@Injectable({ providedIn: 'root' })
export class PaymentRateService {

  constructor(private paymentRateStore: PaymentRateStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<PaymentRate[]>('https://api.com').pipe(tap(entities => {
      this.paymentRateStore.set(entities);
    }));
  }

  add(paymentRate: PaymentRate) {
    this.paymentRateStore.add(paymentRate);
  }

  update(id, paymentRate: Partial<PaymentRate>) {
    this.paymentRateStore.update(id, paymentRate);
  }

  remove(id: ID) {
    this.paymentRateStore.remove(id);
  }

}
