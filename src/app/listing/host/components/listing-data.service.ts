import { Injectable } from '@angular/core';
import { ListingData, Title, Pricing, Description, Images, Conditions } from './listing-data';
import { WorkflowService } from './listing-flow-config/workflow.service';
import { STEPS } from './listing-flow-config/workflow.model';

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

	getDescription(): Description {
    // Return the description type
    const description: Description = {
			description: this.listingData.description
		};
		return description;
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

  getPricing(): Pricing {
    // Return the description type
    const pricing: Pricing = {
			pricing: this.listingData.pricing
		};
		return pricing;
	}

	setPricing(data: Pricing) {
		// Update the work type only when the Description Form had been validated successfully
		this.isPricingFormValid = true;
		this.listingData.pricing = data.pricing;
		// Validate Description Step in Descriptionflow
		this.workflowService.validateStep(STEPS.pricing);
  }

  getConditions(): Conditions {
		// Return the Title data
		const rules: Conditions = {
			forAll: this.listingData.forAll,
			forPositivelyReviewedOnly: this.listingData.forPositivelyReviewedOnly,
      forStudentsOnly: this.listingData.forStudentsOnly,
      forWorkingClassOnly: this.listingData.forWorkingClassOnly
		};
		return rules;
	}

	setConditions(data: Conditions) {
		// Update the Title data only when the Title Form had been validated successfully
		this.isRulesFormValid = true;
		this.listingData.forAll = data.forAll;
		this.listingData.forPositivelyReviewedOnly = data.forPositivelyReviewedOnly;
    this.listingData.forStudentsOnly = data.forStudentsOnly;
    this.listingData.forWorkingClassOnly = data.forWorkingClassOnly;
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
