import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingDataService } from './listing-data.service';
import { Conditions } from './listing-data';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listing-conditions',
  templateUrl: './listing-conditions.component.html',
  styleUrls: ['./listing-conditions.component.css']
})
export class ListingConditionsComponent implements OnInit {

  conditions: Conditions;

  constructor(private router: Router, private listingDataService: ListingDataService) { }

  ngOnInit(): void {
    this.conditions = this.listingDataService.getConditions();
		console.log('Description feature loaded!');
  }

  conditionsForm = new FormGroup({
    isAvailableToAll: new FormControl(''),
    isPositivelyReviewed: new FormControl(''),
    isStudent: new FormControl(''),
    isWorkingClass: new FormControl('')
	});

  save(conditionsForm: any): boolean {
		if (false) {
			return false;
		}
		this.listingDataService.setConditions(this.conditions);
		return true;
	}

	goToNext(conditionsForm: any) {
		// nagivate to get started page
		// console.log(JSON.stringify(this.titleForm.value));
		if (this.save(conditionsForm)) {
			this.router.navigate(['/listing/become-a-host/title']);
		}
  }

  nextPage(){
    // nagivate to get started page
    this.router.navigate(['/listing/become-a-host/title']);
  }

}
