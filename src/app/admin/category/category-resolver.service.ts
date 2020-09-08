import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CategoryService } from '../state/category/category.service';
import { Category } from '../state/category/category.model';

@Injectable()
export class CategoryResolver implements Resolve<Category> {

constructor(private categoryService: CategoryService,
  private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.categoryService.getCategory(route.params['id'])
      .pipe(catchError((err) => this.router.navigateByUrl('/')));
  }

}
