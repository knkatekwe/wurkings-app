import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Listing, Booking } from 'src/app/core';

declare var paypal;

@Component({
  selector: 'app-checkout-payme',
  templateUrl: './checkout-payme.component.html',
  styleUrls: ['./checkout-payme.component.css']
})
export class CheckoutPaymeComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  @Input() booking: Booking;

  paidFor = false;

  paymentDetail: any;

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.booking.listing.description,
                reference_id: this.booking.id,
                amount: {
                  currency_code: 'USD',
                  value: this.booking.total_amount
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
          this.paymentDetail = order;
        },
        onError: err => {
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

}
