import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent
	},
	{
		path: 'categories',
		loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
	},
	{
		path: 'users',
		loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AdminRoutingModule {}
