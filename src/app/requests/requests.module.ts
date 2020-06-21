import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestsRoutingModule } from './requests-routing.module';
import { SharedModule } from '../shared';
import { RequestsComponent } from './requests.component';


@NgModule({
  declarations: [RequestsComponent],
  imports: [
    SharedModule,
    RequestsRoutingModule
  ]
})
export class RequestsModule { }
