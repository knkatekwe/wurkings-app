import { Component, OnInit } from '@angular/core';
import { Listing, ListingsService } from 'src/app/core';
import { CatergoryService } from 'src/app/core/services/catergory.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-create',
  templateUrl: './listing-create.component.html',
})
export class ListingCreateComponent implements OnInit {

  catergories: any;
  paymentTypes: any;
  listing: Listing;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private catergoryService: CatergoryService,
    private listingService: ListingsService
    ) { }

  ngOnInit() {

    //load catergories
    this.catergoryService.getCategories()
      .subscribe(data => {this.catergories = data
      console.log(data)})

      //load payment-types
    this.catergoryService.getPaymentTypes()
      .subscribe(data => {this.paymentTypes = data
        console.log(data)})
  }

  save(listing){
    console.log('...save method from listing create component...')
    this.listingService.save(listing)
     .subscribe(listing => {console.log('listing saved successfully')
                            console.log(listing)
                          this.router.navigateByUrl('/')},
                error => {console.log(error)})
  }


}
