import { NgModule } from '@angular/core';

import { ListingComponent } from './listing.component';
// import { ArticleResolver } from './listing-resolver.service';
// import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { ListingRoutingModule } from './listing-routing.module';
import { ListingViewComponent } from './listing-view/listing-view.component';
import { ListingEditComponent } from './listing-edit/listing-edit.component';
import { ListingResolver } from './listing-view/listing-resolver.service';
import { ListingDetailFormComponent } from './listing-new/listing-detail-form/listing-detail-form.component';
import { ListingPicturesFormComponent } from './listing-new/listing-pictures-form/listing-pictures-form.component';
import { ListingPricingFormComponent } from './listing-new/listing-pricing-form/listing-pricing-form.component';
import { ListingReviewComponent } from './listing-new/listing-review/listing-review.component';

@NgModule({
  imports: [
    SharedModule,
    ListingRoutingModule
  ],
  declarations: [
    ListingComponent,
    ListingViewComponent,
    ListingEditComponent,
    ListingDetailFormComponent,
    ListingPicturesFormComponent,
    ListingPricingFormComponent,
    ListingReviewComponent,
    // MarkdownPipe
  ],

  providers: [
    ListingResolver,
  ]
})
export class ListingModule {}
