import { Injectable } from '@angular/core';
import { ListingData, Title, Pricing, Rules, Description, Images } from './listing-data';
import { WorkflowService } from './workflow/workflow.service';
import { STEPS } from './workflow/workflow.model';

@Injectable({
	providedIn: 'root'
})
export class ListingDataService {
	private listingData: ListingData = new ListingData();
	private isTitleFormValid = false;
	private isDescriptionFormValid = false;
  private isImagesFormValid = false;
  private isPricingFormValid = false;
  private isRulesFormValid = false;

	constructor(private workflowService: WorkflowService) {}

	getTitle(): Title {
		// Return the Title data
		const title: Title = {
			title: this.listingData.title,
			categoryId: this.listingData.catergoryId,
			locationId: this.listingData.locationId
		};
		return title;
	}

	setTitle(data: Title) {
		// Update the Title data only when the Title Form had been validated successfully
		this.isTitleFormValid = true;
		this.listingData.title = data.title;
		this.listingData.catergoryId = data.categoryId;
		this.listingData.locationId = data.locationId;
		// Validate Title Step in Descriptionflow
		this.workflowService.validateStep(STEPS.title);
	}

	getDescription(): string {
		// Return the description type
		return this.listingData.description;
	}

	setDescription(data: Description) {
		// Update the work type only when the Description Form had been validated successfully
		this.isDescriptionFormValid = true;
		this.listingData.description = data.description;
		// Validate Description Step in Descriptionflow
		this.workflowService.validateStep(STEPS.description);
	}

	getImages(): Images {
		// Return the Address data
		const images: Images = {

		};
		return images;
	}

	setImages(data: Images) {
		// Update the Address data only when the Address Form had been validated successfully
	  this.isImagesFormValid = true;
		// this.listingData.street = data.street;
		// this.listingData.city = data.city;
		// this.listingData.state = data.state;
		// this.listingData.zip = data.zip;
		// Validate Address Step in Descriptionflow
		this.workflowService.validateStep(STEPS.images);
  }

  getPricing(): number {
		// Return the description type
		return this.listingData.pricing;
	}

	setPricing(data: Pricing) {
		// Update the work type only when the Description Form had been validated successfully
		this.isPricingFormValid = true;
		this.listingData.pricing = data.price;
		// Validate Description Step in Descriptionflow
		this.workflowService.validateStep(STEPS.pricing);
  }

  getRules(): Rules {
		// Return the Title data
		const rules: Rules = {
			isGovernmentIssuedIdRequired: this.listingData.isGovernmentIssuedIdRequired,
			isPositivelyReviewed: this.listingData.isPositivelyReviewed,
      isStudent: this.listingData.isStudent,
      isWorkingClass: this.listingData.isWorkingClass
		};
		return rules;
	}

	setRules(data: Rules) {
		// Update the Title data only when the Title Form had been validated successfully
		this.isRulesFormValid = true;
		this.listingData.isGovernmentIssuedIdRequired = data.isGovernmentIssuedIdRequired;
		this.listingData.isPositivelyReviewed = data.isPositivelyReviewed;
    this.listingData.isStudent = data.isStudent;
    this.listingData.isWorkingClass = data.isWorkingClass;
		// Validate Title Step in Descriptionflow
		this.workflowService.validateStep(STEPS.title);
	}

	getListingData(): ListingData {
		// Return the entire Form Data
		return this.listingData;
	}

	resetListingData(): ListingData {
		// Reset the workflow
		this.workflowService.resetSteps();
		// Return the listing data after all this.* members had been reset
		this.listingData.clear();
		this.isTitleFormValid = this.isDescriptionFormValid = this.isImagesFormValid = false;
		return this.listingData;
	}

	isFormValid() {
		// Return true if all listings had been validated successfully; otherwise, return false
		return this.isTitleFormValid && this.isDescriptionFormValid && this.isImagesFormValid && this.isPricingFormValid && this.isRulesFormValid;
	}
}
