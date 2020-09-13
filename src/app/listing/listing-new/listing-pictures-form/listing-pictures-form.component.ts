import { Component, OnInit } from '@angular/core';
import { ListingImageService } from 'src/app/core/state/listing-image/listing-image.service';
import { ListingImageQuery } from 'src/app/core/state/listing-image/listing-image.query';
import { Observable } from 'rxjs';
import { ListingImage } from 'src/app/core/state/listing-image/listing-image.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListingImageStore } from 'src/app/core/state/listing-image/listing-image.store';
import { API_ENDPOINT, JwtService } from 'src/app/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-listing-pictures-form',
	templateUrl: './listing-pictures-form.component.html',
	styleUrls: [ './listing-pictures-form.component.css' ]
})
export class ListingPicturesFormComponent implements OnInit {
	form: FormGroup;
	loadingImages$: Observable<boolean>;
	listingImages$: Observable<ListingImage[]>;
	listingId: number | string;
	selectedFile: File = null;
	isSubmitting: boolean;

	constructor(
		private listingImageService: ListingImageService,
		private listingImageQuery: ListingImageQuery,
		private store: ListingImageStore,
		private router: Router,
		private route: ActivatedRoute,
		private http: HttpClient,
		private jwt: JwtService,
		private fb: FormBuilder
	) {}

	ngOnInit() {
		this.isSubmitting = false;
		this.initForm();
		this.listingId = this.route.snapshot.paramMap.get('listingId');
		this.listingImageService.get().subscribe();
		this.listingImages$ = this.listingImageQuery.selectAll({
			filterBy: (entity) => entity.listing_id == this.listingId
		});
	}

	onFileSelected(data) {
		this.selectedFile = <File>data.target.files[0];
		if (data.target.files.length > 0) {
			const file = data.target.files[0];
			this.form.get('image_url').patchValue(file);
		}
	}

	onSubmit() {
		this.isSubmitting = true;
		let header = {
			headers: new HttpHeaders().set('Authorization', `Bearer ${this.jwt.getToken()}`)
		};
		const formData = new FormData();
		formData.append('image_url', this.form.get('image_url').value);
		formData.append('alt', this.form.get('alt').value);
		console.log(formData);
		this.http
			.post<ListingImage>(API_ENDPOINT + '/listing/' + this.listingId + '/listingImage', formData, header)
			.subscribe(
				(res) => {
					this.isSubmitting = false;
					alert('Image uploaded successfully');
					this.resetForm();
					this.store.add(res);
				},
				(err) => {
					this.isSubmitting = false;
					alert('Image upload failed');
					console.log(err);
				}
			);
	}

	navigate() {
		this.router.navigateByUrl('/listing/rent-out/' + this.listingId + '/payment-rate');
	}

	delete(data) {
		console.log(data);
		let r = confirm('Confirm you want to delete picture');
		if (r == true) {
			this.listingImageService.delete(data).subscribe(
				(res) => {
					console.log(res);
				},
				(err) => {
					console.log(err);
				}
			);
		} else {
			console.log('Image not removed');
		}
	}

	resetForm() {
		this.form.get('image_url').setValue('');
		this.form.get('alt').setValue('');
	}

	initForm() {
		this.form = this.fb.group({
			id: [ '' ],
			image_url: [ '', Validators.required ],
			alt: [ '' ]
		});
	}
}
