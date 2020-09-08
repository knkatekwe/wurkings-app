import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../state/category/category.model';
import { FormControl } from '@angular/forms';
import { CategoryService } from '../../state/category/category.service';
import { CategoryQuery } from '../../state/category/category.query';
import { startWith, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-category-list',
	templateUrl: './category-list.component.html',
	styleUrls: [ './category-list.component.css' ]
})
export class CategoryListComponent implements OnInit {
	category$: Observable<Category[]>;
	loading$: Observable<boolean>;
	search = new FormControl();

	constructor(
		private categoryService: CategoryService,
		private categoryQuery: CategoryQuery,
		private modalService: NgbModal
	) {}

	ngOnInit() {
		this.categoryService.get().subscribe();

		this.loading$ = this.categoryQuery.selectLoading();

		this.category$ = this.search.valueChanges.pipe(
			startWith(''),
			switchMap((value) => this.categoryQuery.getCategories(value))
		);
	}
	delete(id) {
		const r = confirm('Confirm you want to delete category');

		if (r == true) {
			this.categoryService
				.delete(id)
				.subscribe(
					(res) => alert('Category deleted successfully!'),
					(err) => alert('Failed to delete category!')
				);
		} else {
			return false;
		}
  }

}
