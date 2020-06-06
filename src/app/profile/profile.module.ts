import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared';
import { ProfileComponent } from './profile.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';


@NgModule({
  declarations: [ProfileComponent, UserReviewsComponent],
  imports: [
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
