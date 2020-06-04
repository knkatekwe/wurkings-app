import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Description } from './listing-data';
import { ListingDataService } from './listing-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-listing-description',
  templateUrl: './listing-description.component.html',
  styleUrls: ['./listing-description.component.css']
})
export class ListingDescriptionComponent implements OnInit {

  description: Description;

  constructor(private router: Router, private listingDataService: ListingDataService) { }

  ngOnInit(): void {
    this.description = this.listingDataService.getDescription();
		console.log('Description feature loaded!');
  }

  descriptionForm = new FormGroup({
		description: new FormControl('', Validators.required)
	});

  save(descriptionForm: any): boolean {
		if (!descriptionForm.valid) {
			return false;
		}
		this.listingDataService.setDescription(this.description);
		return true;
	}

	goToNext(descriptionForm: any) {
		// nagivate to get started page
		// console.log(JSON.stringify(this.titleForm.value));
		if (this.save(descriptionForm)) {
			this.router.navigate(['/listing/become-a-host/pictures']);
		}
  }

  nextPage(){
    this.router.navigate(['/listing/become-a-host/pictures']);
  }

  get descriptionField(){
    return this.descriptionForm.get('description');
  }

}
