import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Listing, Catergory, PaymentType } from 'src/app/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/admin/state/category/category.service';
import { CategoryQuery } from 'src/app/admin/state/category/category.query';
import { Observable } from 'rxjs';
import { Category } from 'src/app/admin/state/category/category.model';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-listing-detail',
	templateUrl: './listing-detail.component.html',
	styleUrls: [ './listing-detail.component.css' ]
})
export class ListingDetailComponent implements OnInit {
	originalName: string;

	selectedListing: Listing;

	@Input() catergories: Catergory;
	@Input() paymentTypes: PaymentType;

	@Input()
	set listing(listing: Listing) {
		if (listing) {
			this.originalName = listing.title;
		}
		this.selectedListing = Object.assign({}, listing);
	}
	@Output() saved = new EventEmitter();
	@Output() deleted = new EventEmitter();

	form: FormGroup;
	search = new FormControl();
	loadingCategory$: Observable<boolean>;
	category$: Observable<Category[]>;

	constructor(
		private router: Router,
		private categoryService: CategoryService,
		private categoryQuery: CategoryQuery,
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.initForm()

		this.categoryService.get().subscribe()

		this.loadingCategory$ = this.categoryQuery.selectLoading()

		this.category$ = this.search.valueChanges.pipe(
			startWith(''),
			switchMap((value) => this.categoryQuery.getCategories(value))
		);
	}

	initForm() {
		this.form = this.formBuilder.group({
			id: [ null ],
			title: [ null, Validators.required ],
			category_id: [ null, Validators.required ],
			description: [ null, Validators.required ],
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.form.controls;
	}
}
