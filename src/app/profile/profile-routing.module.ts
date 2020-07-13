import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserResolver } from './user-resolver.service';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';


const routes: Routes = [
  {
    path: 'settings',
    component: ProfileSettingsComponent
  },
  {
    path: ':id',
    component: ProfileComponent,
    resolve: {
      user: UserResolver
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
