import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared';
import { ProfileComponent } from './profile.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserResolver } from './user-resolver.service';


@NgModule({
  declarations: [ProfileComponent, UserReviewsComponent],
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  providers:[UserResolver]
})
export class ProfileModule { }
