import { Component, OnInit, Input } from '@angular/core';
import { UserService, User, Errors, Message, ListingsService, Profile } from 'src/app/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/core/state/booking/booking.model';
import { BookingService } from 'src/app/core/state/booking/booking.service';
import { BookingQuery } from 'src/app/core/state/booking/booking.query';
import { ListingService } from 'src/app/listing/state/listing.service';
import { ListingQuery } from 'src/app/listing/state/listing.query';
import { PaymentRateService } from 'src/app/core/state/payment-rate/payment-rate.service';
import { CategoryService } from 'src/app/admin/state/category/category.service';
import { PaymentRateQuery } from 'src/app/core/state/payment-rate/payment-rate.query';
import { Listing } from 'src/app/listing/state/listing.model';
import { PaymentRate } from 'src/app/core/state/payment-rate/payment-rate.model';
import { Category } from 'src/app/admin/state/category/category.model';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-request-view',
	templateUrl: './request-view.component.html',
	styleUrls: [ './request-view.component.css' ]
})
export class RequestViewComponent implements OnInit {
	selectedBooking: Booking;
	messages: Message[];
	messageControl = new FormControl();

	isCurrentUser: boolean;
	isSubmitting: boolean;
	errors: Errors;
	currentUser: User;
	isOwner: boolean;
	canPay: boolean;
	isCancelled: boolean;
	isPending: boolean;
	isAccepted: boolean;
  user: string;

  userDetail: Profile;
	owner: Profile;
	listing$: Observable<Listing>;
	paymentRate$: Observable<PaymentRate>;
	category$: Observable<Category>;

	constructor(
		private route: ActivatedRoute,
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
	) {}

	ngOnInit() {
		// Retreive the prefetched booking
		this.route.data.subscribe((data: { booking: Booking }) => {
			this.selectedBooking = data.booking;
			console.log(this.selectedBooking);

			this.userService.currentUser.subscribe((userData: any) => {
				this.currentUser = userData;

				console.log(this.currentUser);
				this.user = this.currentUser.id;

				console.log('from selected booking ' + this.selectedBooking.user_id);
				console.log('from currentUser ' + this.user);

				this.isOwner = this.user === this.selectedBooking.user_id;
				console.log('im owner is: ' + this.isOwner);
				this.canPay = this.selectedBooking.status === 'accepted';
				console.log('is accepted: ' + this.isOwner);
				this.isAccepted = this.selectedBooking.status === 'accepted';
				console.log('can be paid for: ' + this.canPay);
				this.isPending = this.selectedBooking.status === 'pending';
				console.log('is still pending acceptence: ' + this.isPending);
				this.isCancelled = this.selectedBooking.status === 'cancelled';
				console.log('is cancelled: ' + this.isCancelled);
			});
    });

    this.listing$ = this.listingService.getListing(this.selectedBooking.listing_id);
    this.paymentRate$ = this.paymentRateService.getPaymentRate(this.selectedBooking.payment_rate_id)
		this.listing$.subscribe((res) => {
			this.userService.getProfile(res.user_id).subscribe((res) => {
        this.owner = res;
        // console.log('..this is the owner...')
        // console.log(this.owner)
			});
    });

	}

	form = new FormGroup({
		message_body: new FormControl('', [ Validators.required ])
	});

	get f() {
		return this.form.controls;
	}

	bookingAccepted() {
		this.isAccepted = true;
		this.isCancelled = false;
		this.isPending = false;
	}

	bookingCancelled() {
		this.isAccepted = false;
		this.isCancelled = true;
		this.isPending = false;
	}

	// populateMessages(){
	//   this.bookingService.getMessages(this.selectedBooking.id)
	//     .subscribe(res => {this.messages = res
	//       console.log('...these are the messages for the booking...')
	//     console.log(this.messages)})
	// }

	acceptBooking(id, idl) {
		this.isSubmitting = true;
		// this.bookingService.acceptBooking(id, this.selectedBooking)
		//   .subscribe(res => {
		//     this.listingService.updateListing(idl, {isReserved: true})
		//       .subscribe(res =>{this.selectedBooking})
		//     this.isSubmitting = false;})
		this.bookingAccepted;
	}

	cancelBooking(id) {
		this.isSubmitting = true;
		this.bookingService.cancelBooking(id, this.selectedBooking).subscribe((res) => {
			this.isSubmitting = false;
		});
		this.bookingCancelled;
	}

	checkout(id) {
		this.isSubmitting = true;
		this.router.navigate([ '/checkout/payment', id ]);
		this.isSubmitting = false;
	}

	send() {
		this.isSubmitting = true;
		const message = this.form.value;
		console.log(message);
		//     this.bookingService
		//     .sendMessage(this.selectedBooking.id, message)
		//     .subscribe(
		//       data => {console.log(data)
		//         this.form.reset('');
		// 			  this.isSubmitting = false
		//         this.populateMessages()},
		//       err => {
		//         this.errors = err;
		//         this.isSubmitting = false;
		//       }
		//     );
	}
}
