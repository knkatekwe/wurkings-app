import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/admin/state/category/category.service';
import { ListingService } from '../state/listing.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/admin/state/category/category.model';
import { CategoryQuery } from 'src/app/admin/state/category/category.query';
import { startWith, switchMap } from 'rxjs/operators';
import { Listing } from '../state/listing.model';

@Component({
	selector: 'app-listing-edit',
	templateUrl: './listing-edit.component.html'
})
export class ListingEditComponent implements OnInit {

  listing: Listing;
  selectedListing: Listing;
  form: FormGroup;
	search = new FormControl();
	loadingCategory$: Observable<boolean>;
	category$: Observable<Category[]>;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
    private categoryService: CategoryService,
    private categoryQuery: CategoryQuery,
    private fb: FormBuilder,
		private listingService: ListingService
	) {}

	ngOnInit() {
		// Retreive the prefetched listing
		this.route.data.subscribe((data: { listing: Listing }) => {
			this.selectedListing = Object.assign({}, data.listing);
			console.log(this.listing);
    });

    this.initForm()

		this.categoryService.get().subscribe()

		this.loadingCategory$ = this.categoryQuery.selectLoading()

		this.category$ = this.search.valueChanges.pipe(
			startWith(''),
			switchMap((value) => this.categoryQuery.getCategories(value))
		);
	}

	update(listing) {
		console.log('...save method from listing update component...');
		console.log(listing);
		this.listingService.update(listing.id, listing).subscribe(
			(listing) => {
				console.log('listing saved successfully');
				console.log(listing);
				this.router.navigateByUrl('/listing/rent-out/' + this.selectedListing.id + '/pictures');
			},
			(error) => {
				console.log(error);
			}
		);
  }

  initForm() {
		this.form = this.fb.group({
			id: [null],
			title: [null, Validators.required ],
			category_id: [null, Validators.required],
      description: [null, Validators.required],
      outbound: [false],
      _method: ['PATCH']
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.form.controls;
	}

	delete() {
		console.log('...delete method from listing edit component...');
	}
}
