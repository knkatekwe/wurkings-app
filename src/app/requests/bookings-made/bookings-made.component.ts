import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingListConfig } from 'src/app/core';
import { Booking } from 'src/app/core/state/booking/booking.model';
import { BookingService } from 'src/app/core/state/booking/booking.service';

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

		this.bookingService.getBookingsByUser().subscribe((data) => (this.results = data));
	}
}
