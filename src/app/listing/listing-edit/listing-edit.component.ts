import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Listing } from 'src/app/core';
import { CategoryService } from 'src/app/admin/state/category/category.service';
import { ListingService } from '../state/listing.service';

@Component({
	selector: 'app-listing-edit',
	templateUrl: './listing-edit.component.html'
})
export class ListingEditComponent implements OnInit {
	listing: Listing;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private categoryService: CategoryService,
		private listingService: ListingService
	) {}

	ngOnInit() {
		// Retreive the prefetched listing
		this.route.data.subscribe((data: { listing: Listing }) => {
			this.listing = data.listing;
			console.log(this.listing);
		});
	}

	update(listing) {
		console.log('...save method from listing update component...');
		console.log(listing);
		this.listingService.update(listing.id, listing).subscribe(
			(listing) => {
				console.log('listing saved successfully');
				console.log(listing);
				this.router.navigateByUrl('/');
			},
			(error) => {
				console.log(error);
			}
		);
	}

	delete() {
		console.log('...delete method from listing edit component...');
	}
}
