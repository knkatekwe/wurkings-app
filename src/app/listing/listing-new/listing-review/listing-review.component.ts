import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-review',
  templateUrl: './listing-review.component.html',
  styleUrls: ['./listing-review.component.css']
})
export class ListingReviewComponent implements OnInit {

  listingId: number | string

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.listingId = this.route.snapshot.paramMap.get('listingId')
  }

}
