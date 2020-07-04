import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CatergoryService } from 'src/app/core/services/catergory.service';
import { UploadFileService } from 'src/app/core/services/upload-file.service';
import { Listing } from 'src/app/core';

@Component({
  selector: 'app-listing-edit',
  templateUrl: './listing-edit.component.html',
  styleUrls: ['./listing-edit.component.css']
})
export class ListingEditComponent implements OnInit {

  catergories: any;
  paymentTypes: any;
  listing: Listing;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private catergoryService: CatergoryService,
    private uploadService: UploadFileService) { }

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



}
