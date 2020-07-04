import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserResolver } from './user-resolver.service';


const routes: Routes = [
  {
    path: ':id',
    component: ProfileComponent,
    resolve: {
      user: UserResolver
    }
  },
  // {
  //   path: 'reviews',
  //   component: UserReviewsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
