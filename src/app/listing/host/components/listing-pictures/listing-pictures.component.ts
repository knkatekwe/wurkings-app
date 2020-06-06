import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UploadFileService } from 'src/app/core/services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Images } from '../listing-data';
import { ListingDataService } from '../listing-data.service';

@Component({
  selector: 'app-listing-pictures',
  templateUrl: './listing-pictures.component.html',
  styleUrls: ['./listing-pictures.component.css']
})
export class ListingPicturesComponent implements OnInit {

  images: Images;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };


  constructor(private router: Router, private uploadService: UploadFileService, private listingDataService: ListingDataService) { }

  ngOnInit(): void {
    console.log('Pictures feature loaded!');
  }

  imagesForm = new FormGroup({
		images: new FormControl('', Validators.required)
	});

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

  save(): boolean {
		if (false) {
			return false;
		}
		this.listingDataService.setImages(this.images);
		return true;
	}

	goToNext() {
		// nagivate to get started page
		// console.log(JSON.stringify(this.titleForm.value));
		if (this.save()) {
			this.router.navigate(['/listing/become-a-host/pricing']);
		}
  }

  nextPage(){
    // nagivate to get started page
    this.router.navigate(['/listing/become-a-host/pricing']);
  }

}
