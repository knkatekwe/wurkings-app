import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryResolver } from './category-resolver.service';


const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children:[
      {
        path: '',
        component: CategoryListComponent
      },
      {
        path: 'create',
        component: CategoryCreateComponent
      },
      {
        path: ':id',
        component: CategoryEditComponent,
        resolve:{
          category: CategoryResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
