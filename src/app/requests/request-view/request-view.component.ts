import { Component, OnInit, Input } from '@angular/core';
import { Booking, BookingService, UserService, User } from 'src/app/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {

  selectedBooking: Booking;

  currentUser: User;
  canModify: boolean;
  user: string;

  constructor(private route: ActivatedRoute,
    private bookingService: BookingService,
    private formBuilder: FormBuilder,
		private router: Router,
		private userService: UserService) { }

  ngOnInit() {

    // Retreive the prefetched article
		this.route.data.subscribe((data: { booking: Booking }) => {
      this.selectedBooking = data.booking;
      console.log(this.selectedBooking)

			// Load the comments on this article
			//this.populateComments();
		});

		// Load the current user's data
		this.userService.currentUser.subscribe((userData: User) => {
			this.currentUser = userData;

      this.canModify = this.currentUser.id === this.selectedBooking.listing.owner.id;
      this.user = this.currentUser.id;
    });

  }

}
