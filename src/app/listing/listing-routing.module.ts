import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing.component';
import { ListingModule } from './listing.module';
// import { ArticleResolver } from './listing-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent,
    // resolve: {
    //   article: ArticleResolver
    // }
  },
  {
    path: 'become-a-host',
    loadChildren: () => import('./host/host.module').then(m => m.HostModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingRoutingModule {}
