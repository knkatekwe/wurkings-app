import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PaymentRate } from 'src/app/core/state/payment-rate/payment-rate.model';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentRateService } from 'src/app/core/state/payment-rate/payment-rate.service';
import { PaymentRateQuery } from 'src/app/core/state/payment-rate/payment-rate.query';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-listing-pricing',
  templateUrl: './listing-pricing.component.html',
  styleUrls: ['./listing-pricing.component.css']
})
export class ListingPricingComponent implements OnInit {

	form: FormGroup;
	search = new FormControl();
	loading$: Observable<boolean>;
  listingPriceRate$: Observable<PaymentRate[]>;
  listingId: number | string

	constructor(
		private router: Router,
		private paymentRateService: PaymentRateService,
		private paymentRateQuery: PaymentRateQuery,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
	) {}

	ngOnInit() {
		this.initForm()

		this.paymentRateService.get().subscribe()
    this.listingId = this.route.snapshot.paramMap.get('listingId');
		this.loading$ = this.paymentRateQuery.selectLoading()

		this.listingPriceRate$ = this.paymentRateQuery.selectAll({filterBy: entity => entity.listing_id == this.listingId})
	}

	initForm() {
		this.form = this.formBuilder.group({
			id: [ null ],
			title: [ null, Validators.required ],
			price: [ null, Validators.required ],
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.form.controls;
  }

  rates:{title: string}[] = [
    {
      "title": "hourly"
    },
    {
      "title": "daily"
    },
    {
      "title": "weekly"
    },
    {
      "title": "monthly"
    }
  ]

}
