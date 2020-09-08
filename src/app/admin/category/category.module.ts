import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { SharedModule } from 'src/app/shared';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryResolver } from './category-resolver.service';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryListComponent
  ],
  imports: [
    SharedModule,
    CategoryRoutingModule
  ],
  providers:[
    CategoryResolver
  ]
})
export class CategoryModule { }
