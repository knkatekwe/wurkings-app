import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../admin/state/category/category.model';
import { CategoryQuery } from '../admin/state/category/category.query';
import { CategoryService } from '../admin/state/category/category.service';
import { PaymentRate } from '../core/state/payment-rate/payment-rate.model';
import { PaymentRateQuery } from '../core/state/payment-rate/payment-rate.query';
import { PaymentRateService } from '../core/state/payment-rate/payment-rate.service';
import { Listing } from './state/listing.model';
import { ListingService } from './state/listing.service';

@Component({
	selector: 'app-listing-page',
	templateUrl: './listing.component.html'
})
export class ListingComponent implements OnInit {
  category$: Observable<Category>;
  paymentRate$: Observable<PaymentRate>;
	paymentRates: Observable<Category>;
	listing: Listing[] = [];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private categoryService: CategoryService,
		private categoryQuery: CategoryQuery,
		private paymentRateService: PaymentRateService,
		private paymentRateQuery: PaymentRateQuery,
		private listingService: ListingService
	) {}

	ngOnInit() {
		// Retreive the prefetched listings
		this.route.data.subscribe((data: { listings: Listing[] }) => {
			this.listing = data.listings;
			console.log(this.listing)
		});
	}
}
