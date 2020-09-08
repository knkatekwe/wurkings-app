import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { AdminSharedModule } from '../shared/admin-shared.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersEditComponent } from './users-edit/users-edit.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UsersEditComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
