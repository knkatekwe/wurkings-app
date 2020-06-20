import { Component, Input } from '@angular/core';

import { ListingsService, ListingListConfig, Listing } from '../../../core';
@Component({
  selector: 'app-listing-list',
  styleUrls: ['listing-list.component.css'],
  templateUrl: './listing-list.component.html'
})
export class ListingListComponent {
  constructor(
    private listingsService: ListingsService
  ) {}

  @Input()
  set config(config: ListingListConfig) {
    if (config) {
      this.query = config;
      // this.currentPage = 1;
      this.runQuery();
    }
  }

  query: ListingListConfig;
  results: Listing[];
  loading = false;

  runQuery() {
    this.loading = true;
    this.results = [];

    // Create limit and offset filter (if necessary)
    // if (this.limit) {
    //   this.query.filters.limit = this.limit;
    //   this.query.filters.offset =  (this.limit * (this.currentPage - 1));
    // }

    this.listingsService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data;
      console.log('tasvika nepa query!!!!!!!')
      console.log(this.results)

      // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
      // this.totalPages = Array.from(new Array(Math.ceil(data.listingsCount / this.limit)), (val, index) => index + 1);
    });
  }
}
