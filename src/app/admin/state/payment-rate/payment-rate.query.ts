import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PaymentRateStore, PaymentRateState } from './payment-rate.store';

@Injectable({ providedIn: 'root' })
export class PaymentRateQuery extends QueryEntity<PaymentRateState> {

  constructor(protected store: PaymentRateStore) {
    super(store);
  }

}
