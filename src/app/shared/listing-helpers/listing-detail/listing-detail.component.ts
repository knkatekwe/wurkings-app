import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup , Validators, FormBuilder } from '@angular/forms';
import { Listing, Catergory, PaymentType } from 'src/app/core';
import { Router } from '@angular/router';
//import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {

  originalName: string;

  selectedListing: Listing;

  @Input() catergories: Catergory;
  @Input() paymentTypes: PaymentType;

  @Input() set listing(listing: Listing){
    if(listing){this.originalName = listing.title}
    this.selectedListing = Object.assign({}, listing)
    //this.selectedListing = cloneDeep(listing);
    // if (typeof listing !== 'undefined') {
    //   this.selectedListing = JSON.parse(JSON.stringify(listing))
    // }
  }
  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();

  form: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    console.log('...listing in the listing detail component...')
    console.log(this.selectedListing)

    this.form = this.formBuilder.group({
      id: [null],
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
  // convenience getter for easy access to form fields
  // get f() { return this.form.controls; }

  get title() { return this.form.get('title'); }
  get catergory() { return this.form.get('catergory'); }
  get state() { return this.form.get('state'); }
  get city() { return this.form.get('city'); }
  get description() { return this.form.get('description'); }
  get price() { return this.form.get('price'); }
  get payment_type() { return this.form.get('payment_type'); }

}
