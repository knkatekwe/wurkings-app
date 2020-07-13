import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [HelpComponent],
  imports: [
    SharedModule,
    HelpRoutingModule
  ]
})
export class HelpModule { }
