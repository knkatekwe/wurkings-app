import { Component, OnInit } from '@angular/core';
import { Listing, ListingsService } from 'src/app/core';
import { CatergoryService } from 'src/app/core/services/catergory.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listing-create',
  templateUrl: './listing-create.component.html',
})
export class ListingCreateComponent implements OnInit {

  form: FormGroup;
  catergories: any;
  paymentTypes: any;
  listing: Listing;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private catergoryService: CatergoryService,
    private listingService: ListingsService
    ) { }

  ngOnInit() {

    this.initializeForm()

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
    console.log(listing)
    this.listingService.save(listing)
     .subscribe(listing => {console.log('listing saved successfully')
                            console.log(listing)
                          this.router.navigateByUrl('/')},
                error => {console.log(error)})
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      catergory: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      description: ['', Validators.required],
      picture: [null],
      price: [null, Validators.required],
      payment_type: ['', Validators.required],
      allCan: [null],
      onlyStudent: [null],
      onlyWorking: [null],
    });
  }

  get title() { return this.form.get('title'); }
  get catergory() { return this.form.get('catergory'); }
  get state() { return this.form.get('state'); }
  get city() { return this.form.get('city'); }
  get description() { return this.form.get('description'); }
  get price() { return this.form.get('price'); }
  get payment_type() { return this.form.get('payment_type'); }

}
