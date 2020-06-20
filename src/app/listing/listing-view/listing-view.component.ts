import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, ListingsService, Listing, User } from 'src/app/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit {

  selectedListing: Listing;
  currentUser: User;
  canModify: boolean;
  user: string;

  constructor(private route: ActivatedRoute,
		private articlesService: ListingsService,
    //private commentsService: CommentsService,
    private formBuilder: FormBuilder,
		private router: Router,
		private userService: UserService) { }

  ngOnInit(){

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
    totalAmount: new FormControl('', Validators.required),
    status: new FormControl('pending', Validators.required),

  });

  get f(){
    return this.form.controls;
  }

  onSubmit(){
    console.log(this.form.value);

    console.log('The difference in days is:' + this.differenceInDays('2020-06-20','2020-06-22'));
    console.log('The difference in hours is:' + this.differenceInHours('2020-06-20','2020-06-22'));

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
