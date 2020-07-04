import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  @Input() catergories: any;
  @Input() paymentTypes: any;
  @Input() set listing(listing: Listing){
    if(listing){this.originalName = listing.title}
    this.selectedListing = Object.assign({}, listing)
  }
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();
  form: FormGroup;


  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private catergoryService: CatergoryService,
              private uploadService: UploadFileService) { }

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  ngOnInit() {

    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      catergory: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      description: ['', Validators.required],
      picture: [null],
      price: [null, Validators.required],
      paymentRate: ['', Validators.required],
      allCan: [null],
      onlyStudent: [null],
      onlyWorking: [null],
    });

  }

  onSubmit(){
    console.log(this.form.value)
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
// get f() { return this.form.controls; }

  get title() { return this.form.get('title'); }
  get catergory() { return this.form.get('catergory'); }
  get state() { return this.form.get('state'); }
  get city() { return this.form.get('city'); }
  get description() { return this.form.get('description'); }
  get price() { return this.form.get('price'); }
  get paymentRate() { return this.form.get('paymentRate'); }

}


