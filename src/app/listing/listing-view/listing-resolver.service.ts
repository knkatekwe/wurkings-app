import { Injectable } from '@angular/core';
import { UserService } from 'src/app/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ListingService } from '../state/listing.service';
import { Listing } from '../state/listing.model';

@Injectable()
export class ListingResolver implements Resolve<Listing> {

constructor(private listingsService: ListingService,
  private router: Router,
  private userService: UserService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.listingsService.getListing(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }

}
