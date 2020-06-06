import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostComponent } from './host.component';
import { ListingTitleComponent } from './components/listing-title/listing-title.component';
import { ListingDescriptionComponent } from './components/listing-description/listing-description.component';
import { ListingPicturesComponent } from './components/listing-pictures/listing-pictures.component';
import { ListingPricingComponent } from './components/listing-pricing/listing-pricing.component';
import { ListingConditionsComponent } from './components/listing-conditions/listing-conditions.component';
import { WorkflowGuard } from './components/listing-flow-config/workflow-guard.service';


const routes: Routes = [
  {
    path: '',
    component: HostComponent,
    children: [
      {
        path: 'title',
        component: ListingTitleComponent
      },
      {
        path: 'description',
        component: ListingDescriptionComponent,
        canActivate: [WorkflowGuard]
      },
      {
        path: 'pictures',
        component: ListingPicturesComponent,
        canActivate: [WorkflowGuard]
      },
      {
        path: 'pricing',
        component: ListingPricingComponent,
        canActivate: [WorkflowGuard]
      },
      {
        path: 'conditions',
        component: ListingConditionsComponent,
        canActivate: [WorkflowGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
