import { Component, OnInit, Input } from '@angular/core';
import { Booking, BookingService, UserService, User, Errors, Message, ListingsService } from 'src/app/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {

  selectedBooking: Booking;
  messages: Message[];
  messageControl = new FormControl();

  isCurrentUser: boolean;
  isSubmitting: boolean;
  errors: Errors
  currentUser: User;
  isOwner: boolean;
  canPay: boolean;
  isCancelled: boolean;
  isPending: boolean;
  isAccepted: boolean;
  user: string;

  constructor(private route: ActivatedRoute,
    private bookingService: BookingService,
    private listingService: ListingsService,
		private router: Router,
		private userService: UserService) { }

  ngOnInit() {
    // Retreive the prefetched booking
		this.route.data.subscribe((data: { booking: Booking }) => {
      this.selectedBooking = data.booking;
      console.log(this.selectedBooking)

			// Load the messages on this booking
      this.populateMessages();

      // Load the current user's data
		this.userService.currentUser.subscribe((userData: any) => {
      this.currentUser = userData;

      console.log(this.currentUser)
      this.user = this.currentUser.id;

      console.log('from selected booking ' + this.selectedBooking.listing.owner)
      console.log('from currentUser ' + this.user)

      this.isOwner = this.user === this.selectedBooking.listing.owner;
      console.log('im owner is: ' + this.isOwner)
      this.canPay = this.selectedBooking.status ==='ACCEPTED';
      console.log('is accepted: ' + this.isOwner)
      this.isAccepted = this.selectedBooking.status ==='ACCEPTED';
      console.log('can be paid for: ' + this.canPay)
      this.isPending = this.selectedBooking.status ==='PENDING';
      console.log('is still pending acceptence: ' + this.isPending)
      this.isCancelled = this.selectedBooking.status ==='CANCELLED';
      console.log('is cancelled: ' + this.isCancelled)
    });

		});

  }

  form = new FormGroup({
    message_body: new FormControl('', [Validators.required]),
  });

  get f(){
    return this.form.controls;
  }

  bookingAccepted(){
    this.isAccepted = true
    this.isCancelled = false
    this.isPending = false
  }

  bookingCancelled(){
    this.isAccepted = false
    this.isCancelled = true
    this.isPending = false
  }

  populateMessages(){
    this.bookingService.getMessages(this.selectedBooking.id)
      .subscribe(res => {this.messages = res
        console.log('...these are the messages for the booking...')
      console.log(this.messages)})
  }

  acceptBooking(id, idl){
    this.isSubmitting = true;
    this.bookingService.updateBooking(id, {status: 'ACCEPTED'})
      .subscribe(res => {
        this.listingService.updateListing(idl, {isReserved: true})
          .subscribe(res =>{this.selectedBooking})
        this.isSubmitting = false;})
    this.bookingAccepted
  }

  cancelBooking(id){
    this.isSubmitting = true;
    this.bookingService.updateBooking(id, {status: 'CANCELLED'})
      .subscribe(res => {
        this.isSubmitting = false;})
    this.bookingCancelled
  }

  checkout(id){
    this.isSubmitting = true;
    this.router.navigate(['/checkout/payment', id])
    this.isSubmitting = false;
  }

  send(){
    this.isSubmitting = true;
    const message = this.form.value;
    console.log(message);
      this.bookingService
      .sendMessage(this.selectedBooking.id, message)
      .subscribe(
        data => {console.log(data)
          this.form.reset('');
				  this.isSubmitting = false
          this.populateMessages()},
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
  }

}
