import { Component, Input } from '@angular/core';

import { Article } from '../../../core';

@Component({
  selector: 'app-listing-preview',
  templateUrl: './listing-preview.component.html'
})
export class ArticlePreviewComponent {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // @Input() Listing: Article;

  // onToggleFavorite(favorited: boolean) {
  //   this.Listing['favorited'] = favorited;

  //   if (favorited) {
  //     this.Listing['favoritesCount']++;
  //   } else {
  //     this.Listing['favoritesCount']--;
  //   }
  // }
}
