import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { BookingResolver } from '../requests/request-view/booking-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: 'payment/:id',
        component: CheckoutPaymentComponent,
        resolve: {
          booking: BookingResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
