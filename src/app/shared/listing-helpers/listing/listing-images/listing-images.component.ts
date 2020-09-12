class ImageSnippet {
	pending: boolean = false;
	status: string = 'init';

	constructor(public src: string, public file: File) {}
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListingImageService } from 'src/app/core/state/listing-image/listing-image.service';
import { API_ENDPOINT } from 'src/app/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ListingImageQuery } from 'src/app/core/state/listing-image/listing-image.query';

@Component({
	selector: 'app-listing-images',
	templateUrl: './listing-images.component.html',
	styleUrls: [ './listing-images.component.css' ]
})
export class ListingImagesComponent implements OnInit {
	@Output() imageUploaded = new EventEmitter();
	@Output() imageError = new EventEmitter();
	@Output() imageLoadedToContainer = new EventEmitter();
	@Output() saved = new EventEmitter();

	//selectedFile: ImageSnippet;
	imageUrl: string;
	selectedFile: File = null;
	form: FormGroup;

	constructor(
		private listingImageService: ListingImageService,
		private http: HttpClient,
		private fb: FormBuilder,
		private listingQueryService: ListingImageQuery
	) {}

	ngOnInit() {
		this.initForm();
	}

	onFileSelected(data) {
		this.selectedFile = <File>data.target.files[0];
	}

	onSubmit() {
		const fd = new FormData();
		fd.append('file', this.selectedFile, this.selectedFile.name);
		// this.listingImageService.add(image, listingId).subscribe(
		// 	(res) => {
		// 		console.log(res);
		// 	},
		// 	(err) => {
		// 		console.log(err);
		// 	}
		// );
	}

	imageLoaded() {
		this.imageLoadedToContainer.emit();
	}

	// private onSuccess(imageUrl: string) {
	// 	this.selectedFile.pending = false;
	// 	this.selectedFile.status = 'ok';
	// 	this.imageUploaded.emit(imageUrl);
	// 	//console.log(imageUrl)
	// }

	// private onError() {
	// 	this.selectedFile.pending = false;
	// 	this.selectedFile.status = 'fail';
	// 	this.selectedFile.src = '';
	// 	this.imageError.emit('');
	// }

	// processFile(imageInput: any) {
	// 	const file: File = imageInput.files[0];
	// 	const reader = new FileReader();

	// 	reader.addEventListener('load', (event: any) => {
	// 		this.selectedFile = new ImageSnippet(event.target.result, file);
	// 		const formData = new FormData();

	// 		formData.append('file', this.selectedFile.file);

	// 		this.selectedFile.pending = true;
	// 		// this.http.post(API_ENDPOINT + '/upload', formData).subscribe(
	// 		// 	(res) => {
	// 		// 		this.imageUrl = res[0].url;
	// 		// 		//console.log(this.imageUrl)
	// 		// 		this.onSuccess(this.imageUrl);
	// 		// 	},
	// 		// 	(err) => {
	// 		// 		this.onError();
	// 		// 		console.log(err);
	// 		// 	}
	// 		// );
	// 	});

	// 	reader.readAsDataURL(file);
	// }

	initForm() {
		this.form = this.fb.group({
			id: [ '' ],
			image_url: [ '' ],
			alt: [ '' ]
		});
	}
}
