import { Component, OnInit } from '@angular/core';
import { Uzer, UserService } from 'src/app/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-login-security',
	templateUrl: './login-security.component.html'
})
export class LoginSecurityComponent implements OnInit {
	user?: Uzer;
	//userInfo: UzerInfo;
  form: FormGroup;
  isSubmitting: boolean

	constructor(private userService: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

	ngOnInit() {
    this.isSubmitting = false
		this.initializeForm();
		//Retreive the prefetched user
		this.route.data.subscribe((data: { user: Uzer }) => {
			this.user = data.user;
			console.log(this.user);
		});
	}

	save() {
		//console.log('...save method from personal information component...');
    //console.log(this.form.value);
    this.isSubmitting = true
		if (this.f.password.value === this.f.password_confirmation.value) {
			this.userService.changePassword(this.user.id, this.form.value).subscribe(
				(user) => {
          alert('Password updated successfully');
          this.isSubmitting = false
					console.log(user);
				},
				(error) => {
          alert('Failed to update password, please try again');
          this.isSubmitting = false
					console.log(error);
				}
			);
		} else {
			alert('Make sure your passwords are the same');
		}
	}

	initializeForm() {
		this.form = this.formBuilder.group({
			password: [ '', Validators.required ],
			password_confirmation: [ '', Validators.required ],
			_method: [ 'PATCH' ]
		});
	}

	get f() {
		return this.form.controls;
	}
}
