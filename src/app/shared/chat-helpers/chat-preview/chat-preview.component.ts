import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/admin/state/category/category.model';
import { CategoryService } from 'src/app/admin/state/category/category.service';
import { BookingService, Profile, UserService } from 'src/app/core';
import { Booking } from 'src/app/core/state/booking/booking.model';
import { BookingQuery } from 'src/app/core/state/booking/booking.query';
import { PaymentRate } from 'src/app/core/state/payment-rate/payment-rate.model';
import { PaymentRateQuery } from 'src/app/core/state/payment-rate/payment-rate.query';
import { PaymentRateService } from 'src/app/core/state/payment-rate/payment-rate.service';
import { Listing } from 'src/app/listing/state/listing.model';
import { ListingQuery } from 'src/app/listing/state/listing.query';
import { ListingService } from 'src/app/listing/state/listing.service';

@Component({
	selector: 'app-chat-preview',
	templateUrl: './chat-preview.component.html',
	styleUrls: [ './chat-preview.component.css' ]
})
export class ChatPreviewComponent implements OnInit {
	@Input() booking: Booking;
	userDetail: Profile;
	owner: Profile;
	listing$: Observable<Listing>;
	paymentRate$: Observable<PaymentRate>;
	category$: Observable<Category>;

	constructor(
		private userService: UserService,
		private bookingService: BookingService,
		private bookingQuery: BookingQuery,
		private listingService: ListingService,
		private listingQuery: ListingQuery,
		private paymentRateService: PaymentRateService,
		private paymentRateQuery: PaymentRateQuery,
		private categoryService: CategoryService,
		private categoryQuery: CategoryService
	) {}

	ngOnInit() {
		// this.categoryService.get().subscribe();
		// this.listingService.get().subscribe();
		//this.paymentRateService.get().subscribe();

    this.listing$ = this.listingService.getListing(this.booking.listing_id);
    this.paymentRate$ = this.paymentRateService.getPaymentRate(this.booking.payment_rate_id)
		this.listing$.subscribe((res) => {
			this.userService.getProfile(res.user_id).subscribe((res) => {
        this.owner = res;
        // console.log('..this is the owner...')
        // console.log(this.owner)
			});
		});
	}
}
