import { Component, OnInit } from '@angular/core';
import { BookingListConfig, UserService, BookingService, User } from '../core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  isAuthenticated: boolean;
  currentUser;

  constructor(private bookingService: BookingService,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    // Retreive the prefetched currentUser
		this.route.data.subscribe((data: { currentUser: any }) => {
      this.currentUser = data.currentUser;
      console.log(this.currentUser)
      	// Load the requests for the user
			//this.populateComments();
		});

    // this.userService.isAuthenticated.subscribe(
    //   (authenticated) => {
    //     this.isAuthenticated = authenticated;

    //     // set the article list accordingly
    //     if (authenticated) {
    //       this.setListTo('feed');
    //     } else {
    //       this.setListTo('all');
    //     }
    //   }
    // );

    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );

    // console.log(this.currentUser)

    // this.bookingService.queryBookings(this.currentUser.id).subscribe(data => {console.log(data)})
    // this.bookingService.queryMyBookings(this.currentUser.id).subscribe(data => {console.log(data)})

    this.router.navigateByUrl('/bookings/to-me')
  }

  listConfig: BookingListConfig = {
    type: 'all',
    filters: {

      status: 'pending'

    }
  };



  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === 'all' && !this.isAuthenticated) {
      this.router.navigateByUrl('/login');
      return;
    }

    // Otherwise, set the list object
    this.listConfig = {type: type, filters: filters};
  }

  submitRequest(){

  }

  updateRequest(){

  }

}
