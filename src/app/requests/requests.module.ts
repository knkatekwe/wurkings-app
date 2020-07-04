import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { SharedModule } from '../shared';
import { RequestsComponent } from './requests.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { BookingResolver } from './request-view/booking-resolver.service';
import { BookingsMadeComponent } from './bookings-made/bookings-made.component';
import { BookingsEnquiredComponent } from './bookings-enquired/bookings-enquired.component';


@NgModule({
  declarations: [RequestsComponent, RequestViewComponent, BookingsMadeComponent, BookingsEnquiredComponent],
  imports: [
    SharedModule,
    RequestsRoutingModule
  ],
  providers: [
    BookingResolver
  ]
})
export class RequestsModule { }
