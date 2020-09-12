import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../core';
import { ListingService } from './state/listing.service';

@Injectable({
  providedIn: 'root'
})
export class UserListingsResolver {

  constructor(private listingsService: ListingService,
    private router: Router,
    private userService: UserService) { }

    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<any> {

      return this.listingsService.getUserListings()
        .pipe(catchError((err) => this.router.navigateByUrl('/')));
    }

}
