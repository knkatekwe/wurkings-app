import { Component, OnInit, Input } from '@angular/core';
import { UserService, User, Errors, Message, ListingsService, Profile } from 'src/app/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
	bookingForm: FormGroup;

	isSubmitting: boolean;
	errors: Errors;
	currentUser: User;
	user: number | string;

	userDetail: Profile;
	owner: Profile;
	listing$: Observable<Listing>;
	paymentRate$: Observable<PaymentRate>;
  category$: Observable<Category>;
  booking$: Observable<Booking>;

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
		private fb: FormBuilder,
		private router: Router
	) {}

	ngOnInit() {
    this.initBookingForm()
		// Retreive the prefetched booking
		this.route.data.subscribe((data: { booking: Booking }) => {
			this.selectedBooking = data.booking;
			//console.log(this.selectedBooking);

			this.userService.currentUser.subscribe((userData: any) => {
				this.currentUser = userData;

				console.log(this.currentUser);
				this.user = this.currentUser.id;
			});
    });

    this.booking$ = this.bookingQuery.selectEntity(this.selectedBooking.id)

		this.listing$ = this.listingService.getListing(this.selectedBooking.listing_id);
		this.paymentRate$ = this.paymentRateService.getPaymentRate(this.selectedBooking.payment_rate_id);
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

	initBookingForm() {
		this.bookingForm = this.fb.group({
			_method: [ 'PATCH' ]
		});
	}

	get f() {
		return this.form.controls;
	}

	// populateMessages(){
	//   this.bookingService.getMessages(this.selectedBooking.id)
	//     .subscribe(res => {this.messages = res
	//       console.log('...these are the messages for the booking...')
	//     console.log(this.messages)})
	// }

	acceptBooking(id) {
    console.log(id)
		this.isSubmitting = true;
		this.bookingService.acceptBooking(id, this.bookingForm.value).subscribe(
			(res) => {
				this.isSubmitting = false;
        console.log(res);
        this.selectedBooking.status = 'accepted'
			},
			(err) => {
				this.isSubmitting = false;
				console.log(err);
			}
		);
	}

	cancelBooking(id) {
		this.isSubmitting = true;
		this.bookingService.cancelBooking(id, this.bookingForm.value).subscribe(
			(res) => {
        this.isSubmitting = false;
        this.selectedBooking.status = 'cancelled'
				console.log(res);
			},
			(err) => {
				this.isSubmitting = false;
				console.log(err);
			}
		);
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
