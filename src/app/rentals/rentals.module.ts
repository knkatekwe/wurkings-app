import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalsRoutingModule } from './rentals-routing.module';
import { RentalsComponent } from './rentals.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [RentalsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RentalsRoutingModule
  ]
})
export class RentalsModule { }
