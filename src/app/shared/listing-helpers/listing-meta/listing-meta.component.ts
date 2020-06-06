import { Component, Input } from '@angular/core';

import { Article } from '../../../core';

@Component({
  selector: 'app-listing-meta',
  templateUrl: './listing-meta.component.html'
})
export class ArticleMetaComponent {
  @Input() article: Article;
}
