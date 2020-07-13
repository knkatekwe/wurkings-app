import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../shared';
import { CheckoutComponent } from './checkout.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CheckoutPaymeComponent } from './checkout-payme/checkout-payme.component';


@NgModule({
  declarations: [CheckoutComponent, CheckoutPaymentComponent, CheckoutPaymeComponent],
  imports: [
    SharedModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
