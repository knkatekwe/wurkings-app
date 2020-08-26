import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking, BookingListConfig, BookingService } from 'src/app/core';

@Component({
	selector: 'app-bookings-enquired',
	templateUrl: './bookings-enquired.component.html'
})
export class BookingsEnquiredComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookingService: BookingService) {}

  currentUser: any;
  results: Booking[];

	ngOnInit() {
    this.route.parent.data.subscribe(
      (data: {currentUser: any}) => {
        this.currentUser = data.currentUser;
        //this.favoritesConfig.filters.favorited = this.profile.username;
      }
    );

    this.bookingService.queryBookings(this.currentUser.id)
      .subscribe(data => this.results = data)

  }
}
