import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, User } from 'src/app/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Listing } from '../state/listing.model';
import { BookingService } from 'src/app/core/state/booking/booking.service';

@Component({
	selector: 'app-listing-view',
	templateUrl: './listing-view.component.html',
	styleUrls: [ './listing-view.component.css' ]
})
export class ListingViewComponent implements OnInit {
	// @Output() requestBooking = new EventEmitter();

	period;
	form: FormGroup;
	rate = new FormControl();
	paymentRateId = new FormControl();
	paymentRateTitle: string;
	isSubmitting: boolean;
	errors: Error;
	selectedListing: Listing;
	currentUser: User;
	canModify: boolean;
	user: number | string;

	serviceFee: number;
	totalForRental: number;
	totalAmount: number;

	startDate: string;

	show: boolean;

	constructor(
		private route: ActivatedRoute,
		private bookingService: BookingService,
		private fb: FormBuilder,
		private router: Router,
		private userService: UserService
	) {}

	ngOnInit() {
		this.serviceFee = 0.05;
		this.show = true;
		this.initForm();

		// Retreive the prefetched article
		this.route.data.subscribe((data: { listing: Listing }) => {
			this.selectedListing = data.listing;
			console.log(this.selectedListing);
			this.rate.setValue(this.selectedListing.payment_rates[0].price);
			this.paymentRateId.setValue(this.selectedListing.payment_rates[0].id);
			this.paymentRateTitle = this.selectedListing.payment_rates[0].title;
			this.f.payment_rate_id.setValue(this.selectedListing.payment_rates[0].id);
			this.f.price.setValue(this.selectedListing.payment_rates[0].price);
		});

		// Load the current user's data
		this.userService.currentUser.subscribe((userData: User) => {
			this.currentUser = userData;

			// this.canModify = this.currentUser.username === this.selectedListing.owner.username;
			this.user = this.currentUser.id;
		});
  }

  changeDuration(){
    this.changeDate()
  }

	setPrice(paymentRateId) {
		console.log(paymentRateId);
		this.f.payment_rate_id.setValue(paymentRateId);
		let value = this.selectedListing.payment_rates.find((x) => x.id == paymentRateId).price;
		this.f.price.setValue(value);
    this.paymentRateTitle = this.selectedListing.payment_rates.find((x) => x.id == paymentRateId).title;
    this.changeDate()
  }

  changeDate(){
    if(this.paymentRateTitle === 'hourly'){
      this.f.end_date.setValue(this.f.start_date.value)
      return true
      console.log('hourly')
    }
    if(this.paymentRateTitle === 'daily'){
      this.f.end_date.setValue(this.addDays(this.f.start_date.value, this.f.duration.value))
      return true
      console.log('daily')
    }
    if(this.paymentRateTitle === 'weekly'){
      this.f.end_date.setValue(this.addWeeks(this.f.start_date.value, this.f.duration.value))
      return true
    }
    if(this.paymentRateTitle === 'monthly'){
      this.f.end_date.setValue(this.addMonths(this.f.start_date.value, this.f.duration.value))
      return true
    }
    else{
      return this.f.end_date.setValue('nada')
    }
  }

	updateBookingForm(data) {
		const totalServiceFee = this.serviceFee * (data.duration * data.price);
		const total = data.duration * data.price + totalServiceFee;
		this.form.controls.total.patchValue(total, { emitEvent: false });
    this.form.controls.service_fee.patchValue(totalServiceFee, { emitEvent: false });
	}

	initForm() {
		this.form = this.fb.group({
      start_date: [ null, Validators.required ],
      end_date: [ null, Validators.required ],
			duration: [ null, Validators.required ],
			payment_rate_id: [ this.paymentRateId.value, Validators.required ],
			//total_amount: new FormControl('', Validators.required),
			price: [ null, Validators.required ],
			service_fee: [ 0, Validators.required ],
			total: [ 0, Validators.required ]
			//status: new FormControl('PENDING', Validators.required),
		});
		this.form.valueChanges.subscribe((data) => this.updateBookingForm(data));
	}

	get f() {
		return this.form.controls;
  }

	onSubmit() {
		const booking = this.form.value;
		console.log(booking);
		if (this.currentUser) {
			this.bookingService.add(this.selectedListing.id, booking).subscribe(
				(data) => {
					this.router.navigateByUrl('/requests/by-me');
				},
				(err) => {
					this.errors = err;
					this.isSubmitting = false;
				}
			);
		} else {
			this.router.navigateByUrl('/login');
		}
  }

  addDays(start, duration: number){
    let endDate = new Date(start);
    endDate.setDate(endDate.getDate() + duration)
    return endDate
  }

  addWeeks(start, duration){
    let startDate = new Date(start);
    let endDate = new Date(start);
    endDate.setDate(endDate.getDate() + (duration * 7))
    return endDate
  }

  addMonths(start, duration){
    let endDate = new Date(start);
    //endDate.setDate(endDate.getDate() + (duration * 7))
    let newDate = new Date(endDate.setMonth(endDate.getMonth() + duration));
    return newDate
  }

	differenceInDays(start, end): number {
		let s = new Date(start);
		let e = new Date(end);
		let result = (e.valueOf() - s.valueOf()) / (1000 * 60 * 60 * 24);
		return result;
	}

	differenceInHours(start, end): number {
		let s = new Date(start);
		let e = new Date(end);
		let result = (e.valueOf() - s.valueOf()) / (1000 * 60 * 60);
		return result;
	}
}
