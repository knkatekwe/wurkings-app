import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Listing } from 'src/app/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadFileService } from 'src/app/core/services/upload-file.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {

  listing: Listing;

  constructor(private router: Router, private uploadService: UploadFileService) { }

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  ngOnInit() {
  }

  form = new FormGroup({
		title: new FormControl('', Validators.required),
		category: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    picture: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    allCan: new FormControl('', Validators.required),
    onlyStudent: new FormControl('', Validators.required),
    onlyWorking: new FormControl('', Validators.required),
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


