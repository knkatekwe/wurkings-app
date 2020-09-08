import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/admin/state/category/category.model';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  form: FormGroup
  selectedCategory: Category
  isSubmitting: boolean

  @Output() saved = new EventEmitter();

  @Input() set category(category: Category){
    this.selectedCategory = Object.assign({}, category)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.isSubmitting = false
    this.initialiseForm()
  }

  initialiseForm(){
    this.form = this.fb.group({
      id: [''],
      category_title: ['', Validators.required],
    });
  }

  save(data){
    this.isSubmitting = true
    this.saved.emit(data)
  }

  get f(){
    return this.form.controls
  }

}
