import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CatergoryService } from 'src/app/core/services/catergory.service';
import { UploadFileService } from 'src/app/core/services/upload-file.service';
import { Listing, ListingsService } from 'src/app/core';

@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
})
export class ListingEditComponent implements OnInit {

  catergories: any;
  paymentTypes: any;
  listing: Listing;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private catergoryService: CatergoryService,
    private listingService: ListingsService) { }

  ngOnInit() {

    // Retreive the prefetched article
		this.route.data.subscribe((data: { listing: Listing }) => {
      this.listing = data.listing;
      console.log(this.listing)

			// Load the comments on this article
			//this.populateComments();
    });

    //load catergories
    this.catergoryService.getCategories()
      .subscribe(data => {this.catergories = data
      console.log(data)})

      //load payment-types
    this.catergoryService.getPaymentTypes()
      .subscribe(data => {this.paymentTypes = data
        console.log(data)})
  }


  update(listing){
    console.log('...save method from listing update component...')
    this.listingService.save(listing)
     .subscribe(listing => {console.log('listing saved successfully')
                            console.log(listing)
                            this.router.navigateByUrl('/')},
                error => {console.log(error)})
  }

  delete(){
    console.log('...delete method from listing edit component...')
  }


}
