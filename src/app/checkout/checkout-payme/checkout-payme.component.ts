import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/admin/state/category/category.model';
import { CategoryQuery } from 'src/app/admin/state/category/category.query';
import { CategoryService } from 'src/app/admin/state/category/category.service';
import { Profile, UserService } from 'src/app/core';
import { Booking } from 'src/app/core/state/booking/booking.model';
import { BookingQuery } from 'src/app/core/state/booking/booking.query';
import { BookingService } from 'src/app/core/state/booking/booking.service';
import { PaymentRate } from 'src/app/core/state/payment-rate/payment-rate.model';
import { PaymentRateQuery } from 'src/app/core/state/payment-rate/payment-rate.query';
import { PaymentRateService } from 'src/app/core/state/payment-rate/payment-rate.service';
import { Listing } from 'src/app/listing/state/listing.model';
import { ListingQuery } from 'src/app/listing/state/listing.query';
import { ListingService } from 'src/app/listing/state/listing.service';

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

  owner: Profile;
  paymentRate$: Observable<PaymentRate>;
  category$: Observable<Category>;
  booking$: Observable<Booking>;
  listing$: Observable<Listing>
  listing: Listing;

	constructor(
		private userService: UserService,
		private bookingService: BookingService,
		private bookingQuery: BookingQuery,
		private listingService: ListingService,
		private listingQuery: ListingQuery,
		private paymentRateService: PaymentRateService,
		private paymentRateQuery: PaymentRateQuery,
		private categoryService: CategoryService,
		private categoryQuery: CategoryQuery,
	) {}


  ngOnInit() {
    this.listing$ = this.listingService.getListing(this.booking.listing_id);
		this.paymentRate$ = this.paymentRateService.getPaymentRate(this.booking.payment_rate_id);
		this.listing$.subscribe((res) => {
      this.listing = res
			this.userService.getProfile(res.user_id).subscribe((res) => {
				this.owner = res;
				// console.log('..this is the owner...')
				// console.log(this.owner)
			});
    });
    //paypal
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.listing.description,
                reference_id: this.booking.id,
                amount: {
                  currency_code: 'USD',
                  value: this.booking.total
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
