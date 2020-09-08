import { Component, OnInit } from '@angular/core';
import { UserService, Uzer, User } from 'src/app/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-personal-info',
	templateUrl: './personal-info.component.html'
})
export class PersonalInfoComponent implements OnInit {
	user?: Uzer;
	//userInfo: UzerInfo;
	form: FormGroup;
	isSubmitting: boolean;

	constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.isSubmitting = false;
		this.initializeForm();
		// Retreive the prefetched user
		this.route.data.subscribe((data: { user: Uzer }) => {
			this.user = data.user;
			console.log(this.user);
		});
	}

	handleImageChange() {
		// this.user.profile_picture_url = "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/13/image.jpeg";
	}

	handleImageUpload(imageUrl: string) {
		this.form.controls.profile_picture_url.setValue(imageUrl);
	}

	handleImageError() {
		//this.listing.image = '';
	}

	save() {
		//console.log('...save method from personal information component...')
    //console.log(this.form.value);
    this.isSubmitting = true
		this.userService.update(this.user.id, this.form.value).subscribe(
			(user) => {
        this.isSubmitting = false
				alert('Profile updated successfully successfully');
				console.log(user);
			},
			(error) => {
        this.isSubmitting = false
        alert('Failed to update profile, please try again');
				console.log(error);
			}
		);
	}

	initializeForm() {
		this.form = this.formBuilder.group({
			first_name: [ '', Validators.required ],
			last_name: [ '', Validators.required ],
			phone_number: [ '', Validators.required ],
			date_of_birth: [ '', Validators.required ],
			gender: [ '', Validators.required ],
			physical_address: [ '', Validators.required ],
			occupation: [ '', Validators.required ],
			//profile_picture_url: [''],
			about: [ '' ],
			_method: [ 'PATCH' ]
		});
	}

	get f() {
		return this.form.controls;
	}
}
