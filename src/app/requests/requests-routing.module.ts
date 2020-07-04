import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { BookingResolver } from './request-view/booking-resolver.service';
import { UserResolver } from '../profile/user-resolver.service';
import { BookingsMadeComponent } from './bookings-made/bookings-made.component';
import { BookingsEnquiredComponent } from './bookings-enquired/bookings-enquired.component';
import { CurrentUserResolver } from '../profile/current-user-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: RequestsComponent,
    resolve:{
      currentUser: CurrentUserResolver
    },
    children:[
      {
        path: 'by-me',
        component: BookingsMadeComponent
      },
      {
        path: 'to-me',
        component: BookingsEnquiredComponent
      }
    ]
  },
  {
    path: ':id',
    component: RequestViewComponent,
    resolve: {
      booking: BookingResolver
    }
  },
  {
		path: 'requests',
		pathMatch: 'full',
		redirectTo: '/requests/to-me'
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
