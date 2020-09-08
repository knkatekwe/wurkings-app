import { NgModule } from '@angular/core';

import { ListingComponent } from './listing.component';
// import { ArticleResolver } from './listing-resolver.service';
// import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { ListingRoutingModule } from './listing-routing.module';
import { ListingViewComponent } from './listing-view/listing-view.component';
import { ListingEditComponent } from './listing-edit/listing-edit.component';
import { ListingResolver } from './listing-view/listing-resolver.service';
import { ListingCreateComponent } from './listing-create/listing-create.component';
import { ListingService } from './state/listing.service';

@NgModule({
  imports: [
    SharedModule,
    // HostModule,
    ListingRoutingModule
  ],
  declarations: [
    ListingComponent,
    ListingViewComponent,
    ListingEditComponent,
    ListingCreateComponent,
    // MarkdownPipe
  ],

  providers: [
    ListingResolver,
    ListingService
  ]
})
export class ListingModule {}
