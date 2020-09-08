import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cacheable } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Category } from './category.model';
import { CategoryStore } from './category.store';
import { API_ENDPOINT } from 'src/app/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CategoryService {
	constructor(private store: CategoryStore, private http: HttpClient) {}

	get(): Observable<Category[]> {
		const request$ = this.http
			.get<Category[]>(API_ENDPOINT + '/categories')
			.pipe(tap((entities) => this.store.set(entities)));

		return cacheable(this.store, request$);
	}

	getCategory(id): Observable<Category> {
		return this.http.get<Category>(API_ENDPOINT + '/category/' + id);
	}

	add(category: Category): Observable<Category> {
		return this.http.post<Category>(API_ENDPOINT + '/category', category).pipe(
			tap((category) => {
				this.store.add(category);
			})
		);
	}

	delete(id): Observable<any> {
		return this.http.delete(API_ENDPOINT + '/category/' + id).pipe(
			tap((category) => {
				this.store.remove(id);
			})
		);
	}

	update(id, category: Category): Observable<any> {
		return this.http.post(API_ENDPOINT + '/category/' + id, category).pipe(
			tap((category) => {
				this.store.update(id, category);
			})
		);
	}
}
