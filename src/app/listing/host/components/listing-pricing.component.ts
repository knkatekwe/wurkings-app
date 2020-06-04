import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pricing } from './listing-data';
import { ListingDataService } from './listing-data.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listing-pricing',
  templateUrl: './listing-pricing.component.html',
  styleUrls: ['./listing-pricing.component.css']
})
export class ListingPricingComponent implements OnInit {

  pricing: Pricing;

  constructor(private router: Router, private listingDataService: ListingDataService) { }

  ngOnInit(): void {
    this.pricing = this.listingDataService.getPricing();
		console.log('Description feature loaded!');
  }

  pricingForm = new FormGroup({
		pricing: new FormControl('', Validators.required)
	});

  save(pricingForm: any): boolean {
		if (!pricingForm.valid) {
			return false;
		}
		this.listingDataService.setPricing(this.pricing);
		return true;
	}

	goToNext(pricingForm: any) {
		// nagivate to get started page
		// console.log(JSON.stringify(this.titleForm.value));
		if (this.save(pricingForm)) {
			this.router.navigate(['/listing/become-a-host/conditions']);
		}
  }

  nextPage(){
    // nagivate to get started page
    this.router.navigate(['/listing/become-a-host/conditions']);
  }

  get pricingField(){
    return this.pricingForm.get('pricing');
  }

}
