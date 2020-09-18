import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { ActiveRouteState } from '@datorama/akita-ng-router-store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/admin/state/category/category.model';
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
	currentUrl: string;

	constructor(
		private userService: UserService,
		private bookingService: BookingService,
		private bookingQuery: BookingQuery,
		private listingService: ListingService,
		private listingQuery: ListingQuery,
		private paymentRateService: PaymentRateService,
		private paymentRateQuery: PaymentRateQuery,
		private categoryService: CategoryService,
		private categoryQuery: CategoryService,
		private router: Router
	) {
		const snapshot: RouterStateSnapshot = router.routerState.snapshot;
		console.log('===================================================');

		this.currentUrl = snapshot.url;
		console.log(this.currentUrl);
		console.log('===================================================');
	}

	ngOnInit() {
		// this.categoryService.get().subscribe();
		// this.listingService.get().subscribe();
		//this.paymentRateService.get().subscribe();

		this.listing$ = this.listingService.getListing(this.booking.listing_id);
		this.paymentRate$ = this.paymentRateService.getPaymentRate(this.booking.payment_rate_id);
		this.listing$.subscribe((res) => {
			this.userService.getProfile(res.user_id).subscribe((res) => {
				this.owner = res;
				// console.log('..this is the owner...')
			});
		});
	}

	remove(bookingId) {
		let r = confirm('Confirm you want to remove booking?');
		if (r == true) {
			this.bookingService.delete(bookingId).subscribe(
				(res) => {
					console.log(res);
					this.router
						.navigateByUrl('/', { skipLocationChange: false })
						.then(() => this.router.navigate([ this.currentUrl ]));
				},
				(err) => {
					console.log(err);
				}
			);
		} else {
			console.log('Image not removed');
		}
	}
}
