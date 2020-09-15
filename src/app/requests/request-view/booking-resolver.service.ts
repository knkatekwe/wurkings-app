import { Injectable } from '@angular/core';
import { UserService, Booking } from 'src/app/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BookingService } from 'src/app/core/state/booking/booking.service';

@Injectable()
export class BookingResolver implements Resolve<Booking> {

constructor(private bookingService: BookingService,
  private router: Router,
  private userService: UserService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.bookingService.getBooking(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }

}
