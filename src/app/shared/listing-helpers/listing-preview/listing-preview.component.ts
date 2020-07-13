import { Component, Input, OnInit } from '@angular/core';
import { Listing, User, UserService } from 'src/app/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-preview',
  templateUrl: './listing-preview.component.html'
})
export class ListingPreviewComponent implements OnInit{

  @Input() listing: Listing;
  user: User;

  constructor(private route: ActivatedRoute,
		private userService: UserService) { }


  ngOnInit(){
    // Load the current user's data
		this.userService.currentUser.subscribe((userData: User) => {
      this.user = userData;
      console.log('...user for listing preview component...')
      console.log(this.user)
    });
  }

  onToggleFavorite(favorited: boolean) {
    this.listing['favorited'] = favorited;

    if (favorited) {
      this.listing['favoritesCount']++;
    } else {
      this.listing['favoritesCount']--;
    }
  }
}
