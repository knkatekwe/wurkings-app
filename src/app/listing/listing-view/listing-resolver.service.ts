import { Injectable } from '@angular/core';
import { ListingsService, UserService, Listing } from 'src/app/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ListingResolver implements Resolve<Listing> {

constructor(private listingsService: ListingsService,
  private router: Router,
  private userService: UserService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.listingsService.get(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }

}
