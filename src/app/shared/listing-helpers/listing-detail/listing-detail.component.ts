import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Listing, Catergory } from 'src/app/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadFileService } from 'src/app/core/services/upload-file.service';
import { Router } from '@angular/router';
import { CatergoryService } from 'src/app/core/services/catergory.service';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {

  originalName: string;
  selectedListing: Listing;

  @Input() set listing(listing: Listing){
    if(listing){this.originalName = listing.title}
    this.selectedListing = Object.assign({}, listing)
  }
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  catergories: any;
  paymentTypes: any;


  constructor(private router: Router,
              private catergoryService: CatergoryService,
              private uploadService: UploadFileService) { }

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  ngOnInit() {
    this.catergoryService.getCategories()
      .subscribe(data => {this.catergories = data
      console.log(data)})
    this.catergoryService.getPaymentTypes()
      .subscribe(data => {this.paymentTypes = data
        console.log(data)})
  }

  form = new FormGroup({
		title: new FormControl('', Validators.required),
		catergory: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    picture: new FormControl(''),
    price: new FormControl('', Validators.required),
    paymentRate: new FormControl('', Validators.required),
    allCan: new FormControl(''),
    onlyStudent: new FormControl(''),
    onlyWorking: new FormControl(''),
  });

  data = this.form.value
  onSubmit(){
    console.log(this.data)
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }

  // convenience getter for easy access to form fields
get f() { return this.form.controls; }



}


