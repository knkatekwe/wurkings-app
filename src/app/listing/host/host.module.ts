import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { SharedModule } from 'src/app/shared';
import { HostComponent } from './host.component';
import { ListingTitleComponent } from './components/listing-title/listing-title.component';
import { ListingDescriptionComponent } from './components/listing-description/listing-description.component';
import { ListingPricingComponent } from './components/listing-pricing/listing-pricing.component';
import { ListingPicturesComponent } from './components/listing-pictures/listing-pictures.component';
import { ListingConditionsComponent } from './components/listing-conditions/listing-conditions.component';
import { ListingDataService } from './components/listing-data.service';
import { WorkflowService } from './components/listing-flow-config/workflow.service';
import { WorkflowGuard } from './components/listing-flow-config/workflow-guard.service';
import { ListingOverviewComponent } from './components/listing-overview/listing-overview.component';


@NgModule({
  declarations: [HostComponent, ListingTitleComponent, ListingDescriptionComponent, ListingPricingComponent,
                 ListingPicturesComponent, ListingConditionsComponent, ListingOverviewComponent],
  imports: [
    SharedModule,
    HostRoutingModule
  ],

  providers: [WorkflowGuard],

})
export class HostModule { }
