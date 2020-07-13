import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService, ListingsService, UserService, Booking, User } from 'src/app/core';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.css']
})
export class CheckoutPaymentComponent implements OnInit {

  selectedBooking: Booking;
  currentUser: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {

    this.route.data.subscribe((data: { booking: Booking }) => {
      this.selectedBooking = data.booking;
      console.log(this.selectedBooking)

      // Load the current user's data
      this.userService.currentUser.subscribe((userData: any) => {
        this.currentUser = userData;
        console.log(this.currentUser)
      });

    });

    }

}
