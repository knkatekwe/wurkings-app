import { Injectable } from '@angular/core';
import { UserService, User } from 'src/app/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserResolver implements Resolve<any> {

constructor(private userService: UserService,
  private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.userService.get(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/login')));
  }

}
