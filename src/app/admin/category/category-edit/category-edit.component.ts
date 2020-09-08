import { Component, OnInit } from '@angular/core';
import { Category } from '../../state/category/category.model';
import { CategoryService } from '../../state/category/category.service';
import { CategoryQuery } from '../../state/category/category.query';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MessageModalService } from 'src/app/shared/message-modal/message-modal.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  form: FormGroup
  category: Category;
  isSubmitting: boolean

	constructor(
		private categoriesService: CategoryService,
		private categoriesQuery: CategoryQuery,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private info: MessageModalService,
	) {}

	ngOnInit() {
    // Retreive the prefetched article
    this.isSubmitting = false
    this.initialiseForm()
		this.route.data.subscribe((data: { category: Category }) => {
      this.category = data.category;
      console.log(this.category)
		});

		this.categoriesService.get().subscribe();
  }

  initialiseForm(){
    this.form = this.fb.group({
      id: [''],
      category_title: ['', Validators.required],
      _method: ['PATCH']
    });
  }

  get f(){
    return this.form.controls
  }

  update(category){
    //console.log(category)
    this.isSubmitting = true
    this.categoriesService.update(category.id, category)
      .subscribe((res) => {
        alert('Category ' + res.category_title + ' updated successfully.')
        //this.info.confirm('Message', 'Category updated successfully', 'Ok')
        this.isSubmitting = false
        this.router.navigateByUrl('admin/categories')
      },(err) => {
        this.info.confirm('Message', 'Failed to update category', 'Ok')
        alert('Failed to update category!')
        this.isSubmitting = false
      })
  }

}
