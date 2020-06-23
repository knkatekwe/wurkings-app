import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { BookingResolver } from './request-view/booking-resolver.service';
import { UserResolver } from '../profile/user-resolver.service';
import { BookingsMadeComponent } from './request-view/bookings-made/bookings-made.component';
import { BookingsEnquiredComponent } from './request-view/bookings-enquired/bookings-enquired.component';


const routes: Routes = [
  {
    path: '',
    component: RequestsComponent,
    resolve:{
      currentUser: UserResolver
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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsRoutingModule { }
