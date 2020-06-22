import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './requests.component';
import { RequestViewComponent } from './request-view/request-view.component';
import { BookingResolver } from './request-view/booking-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: RequestsComponent
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
