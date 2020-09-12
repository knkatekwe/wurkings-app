import { Component, Input, OnInit } from '@angular/core';
import { ListingQuery } from 'src/app/listing/state/listing.query';
import { ListingService } from 'src/app/listing/state/listing.service';
import { Observable } from 'rxjs';
import { Listing } from 'src/app/listing/state/listing.model';
@Component({
	selector: 'app-listing-list',
	styleUrls: [ 'listing-list.component.css' ],
	templateUrl: './listing-list.component.html'
})
export class ListingListComponent implements OnInit {

  listing$: Observable<Listing[]>
  loading$: Observable<boolean>;

  constructor(private listingQuery: ListingQuery,
              private listingService: ListingService) {}

	ngOnInit() {
    this.listingService.get().subscribe()
    this.listing$ = this.listingQuery.selectAll()
    this.loading$ = this.listingQuery.selectLoading()
  }

}
