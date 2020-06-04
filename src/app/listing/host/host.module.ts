import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { SharedModule } from 'src/app/shared';
import { HostComponent } from './host.component';
import { ListingTitleComponent } from './components/listing-title.component';
import { ListingDescriptionComponent } from './components/listing-description.component';
import { ListingPricingComponent } from './components/listing-pricing.component';
import { ListingPicturesComponent } from './components/listing-pictures.component';
import { ListingConditionsComponent } from './components/listing-conditions.component';
import { ListingDataService } from './components/listing-data.service';
import { WorkflowService } from './components/workflow/workflow.service';
import { WorkflowGuard } from './components/workflow/workflow-guard.service';


@NgModule({
  declarations: [HostComponent, ListingTitleComponent, ListingDescriptionComponent, ListingPricingComponent,
                 ListingPicturesComponent, ListingConditionsComponent],
  imports: [
    SharedModule,
    HostRoutingModule
  ],

  providers: [WorkflowGuard],

})
export class HostModule { }
