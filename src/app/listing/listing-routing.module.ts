import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing.component';
import { ListingModule } from './listing.module';
import { ListingViewComponent } from './listing-view/listing-view.component';
import { ListingDetailComponent } from '../shared/listing-helpers/listing-detail/listing-detail.component';
import { ListingEditComponent } from './listing-edit/listing-edit.component';
import { ListingResolver } from './listing-view/listing-resolver.service';
// import { ArticleResolver } from './listing-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent,
  },
  {
    path: 'preview/:id',
    component: ListingViewComponent,
    resolve: {
      listing: ListingResolver
    }
  },
  {
    path: 'id',
    component: ListingEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule {}
