import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared';
import { ProfileComponent } from './profile.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserResolver } from './user-resolver.service';
import { CurrentUserResolver } from './current-user-resolver.service';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';


@NgModule({
  declarations: [ProfileComponent, UserReviewsComponent, ProfileSettingsComponent],
  imports: [
    SharedModule,
    ProfileRoutingModule
  ],
  providers:[UserResolver, CurrentUserResolver]
})
export class ProfileModule { }
