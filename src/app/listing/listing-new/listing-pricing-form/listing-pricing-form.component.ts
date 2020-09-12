import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PaymentRateQuery } from 'src/app/core/state/payment-rate/payment-rate.query';
import { PaymentRateService } from 'src/app/core/state/payment-rate/payment-rate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PaymentRate } from 'src/app/core/state/payment-rate/payment-rate.model';
import { API_ENDPOINT, JwtService } from 'src/app/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PaymentRateStore } from 'src/app/core/state/payment-rate/payment-rate.store';

@Component({
	selector: 'app-listing-pricing-form',
	templateUrl: './listing-pricing-form.component.html',
	styleUrls: [ './listing-pricing-form.component.css' ]
})
export class ListingPricingFormComponent implements OnInit {

	form: FormGroup;
	loading$: Observable<boolean>;
	listingPriceRate$: Observable<PaymentRate[]>;
	listingId: number | string;
  paymentRate: PaymentRate;
  isSubmitting: boolean

	constructor(
		private router: Router,
		private paymentRateService: PaymentRateService,
		private paymentRateQuery: PaymentRateQuery,
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private jwt: JwtService,
		private http: HttpClient,
		private store: PaymentRateStore
	) {}

	ngOnInit() {
    this.isSubmitting = false
		this.initForm()
		this.paymentRateService.get().subscribe()
		this.listingId = this.route.snapshot.paramMap.get('listingId')
		this.loading$ = this.paymentRateQuery.selectLoading();

		this.listingPriceRate$ = this.paymentRateQuery.selectAll({
			filterBy: (entity) => entity.listing_id == this.listingId
		});
  }

  review(){
    // this.router.navigateByUrl('/listing/rent-out/' + this.listingId + '/review')
    this.router.navigateByUrl('/')
  }

	save(data) {
		console.log(data)
    this.isSubmitting = true
    this.paymentRateService.add(data, this.listingId).subscribe(
			(res) => {
        this.isSubmitting = false
        //this.alertService.confirm('Checkout', 'Order successfully placed', 'Ok')
        this.form.reset()
        //alert('Payement rate added successfully')
				//this.router.navigateByUrl('/listing/rent-out/' + res.id + '/pictures')
			},
			(err) => {
        this.isSubmitting = false
        alert('Failed to add payment rate')
        //this.alertService.confirm('Checkout', 'Failed to place order, please try again', 'Ok')
        console.log(err)
			}
		);
	}

	initForm() {
		this.form = this.formBuilder.group({
			id: [ null ],
			title: [ null, Validators.required ],
			price: [ null, Validators.required ]
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.form.controls;
	}

	rates: { title: string }[] = [
		{
			title: 'hourly'
		},
		{
			title: 'daily'
		},
		{
			title: 'weekly'
		},
		{
			title: 'monthly'
		}
	];
}
