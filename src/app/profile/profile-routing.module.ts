import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserResolver } from './user-resolver.service';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { PersonalInfoComponent } from './profile-settings/personal-info/personal-info.component';
import { LoginSecurityComponent } from './profile-settings/login-security/login-security.component';
import { PaymentPayoutComponent } from './profile-settings/payment-payout/payment-payout.component';
import { CurrentUserResolver } from './current-user-resolver.service';

const routes: Routes = [
  {
    path: 'settings',
    component: ProfileSettingsComponent,
  },
  {
    path: 'settings/personal-info',
    component: PersonalInfoComponent,
    resolve: {
      user: CurrentUserResolver
    }
  },
  {
    path: 'settings/login-security',
    component: LoginSecurityComponent,
    resolve: {
      user: CurrentUserResolver
    }
  },
  {
    path: 'settings/payments',
    component: PaymentPayoutComponent
  },
  {
    path: 'reviews',
    component: UserReviewsComponent
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
