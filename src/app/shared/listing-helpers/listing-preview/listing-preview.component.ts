import { Component, Input, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from 'src/app/listing/state/listing.model';
import { CategoryQuery } from 'src/app/admin/state/category/category.query';
import { CategoryService } from 'src/app/admin/state/category/category.service';
import { Observable } from 'rxjs';
import { Category } from 'src/app/admin/state/category/category.model';
import { ListingService } from 'src/app/listing/state/listing.service';

@Component({
	selector: 'app-listing-preview',
	templateUrl: './listing-preview.component.html'
})
export class ListingPreviewComponent implements OnInit {
	@Input() listing: Listing;
	user: User;
	category$: Observable<Category>;

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private categoryQuery: CategoryQuery,
		private categoryService: CategoryService,
		private listingService: ListingService
	) {}

	ngOnInit() {
		// Load the current user's data
		this.categoryService.get().subscribe();
		this.category$ = this.categoryQuery.selectEntity(this.listing.category_id);
		this.userService.currentUser.subscribe((userData: User) => {
			this.user = userData;
			//console.log('...user for listing preview component...');
			//console.log(this.user);
		});
	}

	remove(data) {
		console.log(data);
		let r = confirm('Please note, removing a listing will be permanent. Confirm');
		if (r == true) {
			this.listingService.delete(data).subscribe(
				(res) => {
					console.log(res);
				},
				(err) => {
					console.log(err);
				}
			);
		} else {
			console.log('Image not removed');
		}
	}

	onToggleFavorite(favorited: boolean) {
		this.listing['favorited'] = favorited;

		if (favorited) {
			this.listing['favoritesCount']++;
		} else {
			this.listing['favoritesCount']--;
		}
	}
}
