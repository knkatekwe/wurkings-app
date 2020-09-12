import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { PaymentRate } from './payment-rate.model';

export interface PaymentRateState extends EntityState<PaymentRate> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'payment-rate' })
export class PaymentRateStore extends EntityStore<PaymentRateState> {

  constructor() {
    super();
  }

}
