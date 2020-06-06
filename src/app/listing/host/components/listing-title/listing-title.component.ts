import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListingDataService } from '../listing-data.service';
import { Title } from '../listing-data';

@Component({
	selector: 'app-listing-title',
	templateUrl: './listing-title.component.html',
	styleUrls: [ './listing-title.component.css' ]
})
export class ListingTitleComponent implements OnInit {

	title: Title;

	constructor(private router: Router, private listingDataService: ListingDataService) {}

	titleForm = new FormGroup({
		title: new FormControl('', Validators.required),
		categoryId: new FormControl('', Validators.required),
		locationId: new FormControl('', Validators.required)
	});

	ngOnInit(): void {
		this.title = this.listingDataService.getTitle();
		console.log('Title feature loaded!');
	}

	save(titleForm: any): boolean {
		if (!titleForm.valid) {
			return false;
		}
		this.listingDataService.setTitle(this.title);
		return true;
	}

	goToNext(titleForm: any) {
		// nagivate to get started page
		// console.log(JSON.stringify(this.titleForm.value));
		if (this.save(titleForm)) {
			this.router.navigate([ '/listing/become-a-host/description' ]);
		}
  }

  get titleField(){
    return this.titleForm.get('title');
  }

  get category(){
    return this.titleForm.get('categoryId');
  }

  get location(){
    return this.titleForm.get('locationId');
  }

}
