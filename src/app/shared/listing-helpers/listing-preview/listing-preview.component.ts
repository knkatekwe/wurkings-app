import { Component, Input } from '@angular/core';
import { Listing } from 'src/app/core';

@Component({
  selector: 'app-listing-preview',
  templateUrl: './listing-preview.component.html'
})
export class ListingPreviewComponent {

  @Input() listing: Listing;

  onToggleFavorite(favorited: boolean) {
    this.listing['favorited'] = favorited;

    if (favorited) {
      this.listing['favoritesCount']++;
    } else {
      this.listing['favoritesCount']--;
    }
  }
}
