import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService, BookingListConfig, Booking } from 'src/app/core';

@Component({
	selector: 'app-bookings-made',
	templateUrl: './bookings-made.component.html'
})
export class BookingsMadeComponent implements OnInit {
	constructor(private route: ActivatedRoute, private router: Router, private bookingService: BookingService) {}

	currentUser: any;
	results: Booking[];
	bookingsConfig: BookingListConfig = {
		type: 'all',
		filters: {}
	};

	ngOnInit() {
		this.route.parent.data.subscribe((data: { currentUser: any }) => {
			this.currentUser = data.currentUser;
			//this.favoritesConfig.filters.favorited = this.profile.username;
		});

    this.bookingService.queryMyBookings(this.currentUser.id)
    .subscribe(data => this.results = data);
	}
}
