import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
})
export class PersonalInfoComponent implements OnInit {

  user: User;
  form: FormGroup;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initializeForm()

    // Retreive the prefetched user
		this.route.data.subscribe((data: { user: User }) => {
      this.user = data.user;
      console.log(this.user)
    });
  }

  handleImageChange() {
    //this.listing.image = "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/13/image.jpeg";
  }

  handleImageUpload(imageUrl: string) {
    //this.form.controls.image.setValue(imageUrl);
    console.log('...an image has been set in listing create component...')
    console.log(imageUrl)
  }

  handleImageError() {
    //this.listing.image = '';
  }

  save(){
    console.log('...save method from personal information component...')
    console.log(this.form.value)
    this.userService.update(this.form.value)
     .subscribe(user => {console.log('user saved successfully')
                            console.log(user)},
                error => {console.log(error)})
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      id: [null, Validators.required],
      username: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, Validators.required],
      phone_number: [null, Validators.required],
      dob: [null, Validators.required],
      about: [null],
      governmentIssuedId: [null],
      state: [null, Validators.required],
      city: [null, Validators.required],
      physical_address: [null, Validators.required],
      address2: ['', Validators.required],
      zip: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

}
