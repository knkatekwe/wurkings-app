import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing.component';
import { ListingViewComponent } from './listing-view/listing-view.component';
import { ListingEditComponent } from './listing-edit/listing-edit.component';
import { ListingResolver } from './listing-view/listing-resolver.service';
import { ListingDetailFormComponent } from './listing-new/listing-detail-form/listing-detail-form.component';
import { ListingPicturesFormComponent } from './listing-new/listing-pictures-form/listing-pictures-form.component';
import { ListingPricingFormComponent } from './listing-new/listing-pricing-form/listing-pricing-form.component';
import { UserListingsResolver } from './user-listings.service';
// import { ArticleResolver } from './listing-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent,
    resolve:{
      listings: UserListingsResolver
    }
  },
  {
    path: 'preview/:id',
    component: ListingViewComponent,
    resolve: {
      listing: ListingResolver
    }
  },
  {
    path: 'rent-out',
    component: ListingDetailFormComponent
  },
  {
    path: 'rent-out/:listingId/pictures',
    component: ListingPicturesFormComponent
  },
  {
    path: 'rent-out/:listingId/payment-rate',
    component: ListingPricingFormComponent
  },
  {
    path: 'rent-out/:listingId/review',
    component: ListingPricingFormComponent
  },
  {
    path: ':id',
    component: ListingEditComponent,
    resolve: {
      listing: ListingResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule {}
