import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../state/category/category.service';
import { Router } from '@angular/router';
import { MessageModalService } from 'src/app/shared/message-modal/message-modal.service';

@Component({
	selector: 'app-category-create',
	templateUrl: './category-create.component.html',
	styleUrls: [ './category-create.component.css' ]
})
export class CategoryCreateComponent implements OnInit {
	form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private categoryService: CategoryService,
		private router: Router,
		private info: MessageModalService
	) {}

	ngOnInit() {
		this.initialiseForm();
	}

	initialiseForm() {
		this.form = this.fb.group({
			id: [ '' ],
			category_title: [ '', Validators.required ]
		});
	}

	save(data) {
		console.log(data);
		//this.isSubmitting = true
		this.categoryService.add(data).subscribe(
			(res) => {
        //this.info.confirm('Message', 'Category saved successfully', 'Ok')
				alert('Category ' + res.category_title + ' created successfully.');
				//this.isSubmitting = false
				this.router.navigateByUrl('admin/categories');
			},
			(err) => {
        //this.info.confirm('Message', 'Failed to save category', 'Ok')
				alert('Failed to create category!');
				//this.isSubmitting = false
				console.log(err);
			}
		);
	}
}
