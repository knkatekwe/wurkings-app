import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, ListingsService, Listing, User, BookingService} from 'src/app/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit {

  // @Output() requestBooking = new EventEmitter();

  isSubmitting: boolean;
  errors: Error;
  selectedListing: Listing;
  currentUser: User;
  canModify: boolean;
  user: string;

  serviceFee: number;
  totalForRental: number;
  totalAmount: number;

  startDate: string;
  endDate: string;
  numberOfDays: number;

  show: boolean;

  constructor(private route: ActivatedRoute,
		private listingService: ListingsService,
    private bookingService: BookingService,
    private formBuilder: FormBuilder,
		private router: Router,
		private userService: UserService) { }

  ngOnInit(){

    this.show = true


    // Retreive the prefetched article
		this.route.data.subscribe((data: { listing: Listing }) => {
      this.selectedListing = data.listing;
      console.log(this.selectedListing)

			// Load the comments on this article
			//this.populateComments();
		});

		// Load the current user's data
		this.userService.currentUser.subscribe((userData: User) => {
			this.currentUser = userData;

      this.canModify = this.currentUser.username === this.selectedListing.owner.username;
      this.user = this.currentUser.id;
    });



  }

  form = new FormGroup({

    start_date: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
    user: new FormControl('', Validators.required),
    listing: new FormControl('', Validators.required),
    total_amount: new FormControl('', Validators.required),
    service_fee: new FormControl('', Validators.required),
    total_for_rental: new FormControl('', Validators.required),
    status: new FormControl('PENDING', Validators.required),

  });

  get f(){
    return this.form.controls;
  }

  calculate(start: string, end: string){

    console.log('the length is: ' + end.length + ', the date being: ' + end)

    if(end.length != 10 || start.length != 10){
      this.show = true
      return
    }

    this.numberOfDays = this.differenceInDays(start, end);
    console.log('The number of days is: ' + this.numberOfDays)
    // if(this.numberOfDays == 0){
    //   this.totalAmount = this.selectedListing.price + this.serviceFee;
    //   return
    // }
    this.totalForRental = this.selectedListing.price * this.numberOfDays;
    console.log('The total for the rental is: ' + this.totalForRental)
    this.serviceFee = ((this.selectedListing.price * this.numberOfDays) * 0.05);
    console.log('The total service fee for the rental is: ' + this.serviceFee)
    this.totalAmount = this.totalForRental + this.serviceFee;
    console.log('The total amount for the rental is: ' + this.totalAmount)
    this.show = false
  }

  onSubmit(){
    const requestData = this.form.value;
    console.log(requestData);
      console.log(requestData)
      this.bookingService
      .save(requestData)
      .subscribe(
        data => {this.router.navigateByUrl('/requests')},
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
  }

  differenceInDays(start, end): number{
    let s = new Date(start);
    let e = new Date(end);
    let result = (e.valueOf() - s.valueOf())/(1000 * 60 * 60 * 24);
    return result
  }

  differenceInHours(start, end): number{
    let s = new Date(start);
    let e = new Date(end);
    let result = (e.valueOf() - s.valueOf())/(1000 * 60 * 60);
    return result
  }

  pictures: {imageUrl: string}[] = [
    {
      "imageUrl":"https://www.notebookcheck.net/typo3temp/_processed_/4/b/csm_LenovoE50-80__1__8f23e3bfde.jpg"
    },
    {
      "imageUrl": "https://www.notebookcheck.net/fileadmin/_processed_/csm_4zu3_Lenovo_E51_80_a9251e94ed.jpg"
    },
    {
      "imageUrl": "https://www.notebookcheck.net/fileadmin/_processed_/csm_Lenovo_E51_80_Unterseite_a54dcfafd9.jpg"
    }
  ]



}
