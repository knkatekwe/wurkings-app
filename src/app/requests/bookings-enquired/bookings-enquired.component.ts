import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/core/state/booking/booking.model';
import { BookingService } from 'src/app/core/state/booking/booking.service';

@Component({
	selector: 'app-bookings-enquired',
	templateUrl: './bookings-enquired.component.html'
})
export class BookingsEnquiredComponent implements OnInit {
	constructor(private route: ActivatedRoute, private router: Router, private bookingService: BookingService) {}

	currentUser: any;
	results: Booking[];

	ngOnInit() {
		this.route.parent.data.subscribe((data: { currentUser: any }) => {
			this.currentUser = data.currentUser;
			//this.favoritesConfig.filters.favorited = this.profile.username;
		});

		this.bookingService.getBookingsToUser().subscribe((data) => {
			this.results = data;
		});
	}
}
