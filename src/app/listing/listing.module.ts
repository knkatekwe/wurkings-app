import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListingComponent } from './listing.component';
import { ListCommentComponent } from './host/listing-comment/listing-comment.component';
// import { ArticleResolver } from './listing-resolver.service';
// import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { ListingRoutingModule } from './listing-routing.module';

@NgModule({
  imports: [
    SharedModule,
    // HostModule,
    ListingRoutingModule
  ],
  declarations: [
    ListingComponent,
    ListCommentComponent,
    // MarkdownPipe
  ],

  providers: [
    // ArticleResolver
  ]
})
export class ListingModule {}
