import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService, ListingsService, Listing, User } from 'src/app/core';

@Component({
  selector: 'app-listing-view',
  templateUrl: './listing-view.component.html',
  styleUrls: ['./listing-view.component.css']
})
export class ListingViewComponent implements OnInit {

  listing: Listing;
  currentUser: User;
  canModify: boolean;

  constructor(private route: ActivatedRoute,
		private articlesService: ListingsService,
		//private commentsService: CommentsService,
		private router: Router,
		private userService: UserService) { }

  ngOnInit(){

    // Retreive the prefetched article
		this.route.data.subscribe((data: { listing: Listing }) => {
      this.listing = data.listing;
      console.log(this.listing)

			// Load the comments on this article
			//this.populateComments();
		});

		// Load the current user's data
		this.userService.currentUser.subscribe((userData: User) => {
			this.currentUser = userData;

			this.canModify = this.currentUser.username === this.listing.owner.username;
		});

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
