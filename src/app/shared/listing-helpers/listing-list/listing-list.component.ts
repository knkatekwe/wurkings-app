import { Component, Input, OnInit } from '@angular/core';
import { ListingQuery } from 'src/app/listing/state/listing.query';
import { ListingService } from 'src/app/listing/state/listing.service';
@Component({
	selector: 'app-listing-list',
	styleUrls: [ 'listing-list.component.css' ],
	templateUrl: './listing-list.component.html'
})
export class ListingListComponent implements OnInit {

  listing$ = this.listingQuery.selectAll();
  loading$ = this.listingQuery.selectLoading();

  constructor(private listingQuery: ListingQuery,
              private listingService: ListingService) {}

	ngOnInit() {
    !this.listingQuery.getHasCache() && this.listingService.getAll();
  }
}
