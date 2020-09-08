import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, Errors } from 'src/app/core';
import { RegularExpressionConstant } from 'src/app/core/models/validation';

// import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
	form: FormGroup;
	loading = false;
	submitted = false;
	errors: Errors = { errors: {} };
	isSubmitting: boolean;
	failed: boolean;

	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private userService: UserService
	) // private alertService: AlertService
	{
	}

	ngOnInit() {
		this.failed = false;
		this.isSubmitting = false;
		this.form = this.formBuilder.group({
			email: [ '', [Validators.required, Validators.pattern(RegularExpressionConstant.EMAIL)] ],
			password: [ '', Validators.required ],
			remember_me: [ false ]
		});

		// get return url from route parameters or default to '/'
		// this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.form.controls;
	}

	onSubmit() {
		this.isSubmitting = true;
		//this.errors = {errors: {}};

		const credentials = this.form.value;
		//console.log(credentials);
		this.userService.login(credentials).subscribe(
			(data) => {
				this.isSubmitting = false;
				console.log('login successful!');
				console.log(data);
				this.router.navigateByUrl('/');
			},
			(err) => {
				console.log(err);
				this.isSubmitting = false;
				this.failed = true;
				setTimeout(() => {
					this.failed = false;
				}, 5000);
			}
		);
	}
}
