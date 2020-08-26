import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, Errors } from 'src/app/core';

// import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    errors: Errors = {errors: {}};
    isSubmitting = false;
    failed: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        // private alertService: AlertService
    ) { }

    ngOnInit() {
      this.failed = false;
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            remember_me: [false]
        });

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get email(){
      return this.form.get('email')
    }

    get password(){
      return this.form.get('password')
    }

    onSubmit() {
      //this.isSubmitting = true;
      //this.errors = {errors: {}};

      const credentials = this.form.value;
      console.log(credentials)
      this.userService
      .login(credentials)
      .subscribe(
        data => {
          console.log('login successful!')
          console.log(data)
          this.router.navigateByUrl('/')},
        err => {
          console.log(err)
          this.errors = err;
          this.isSubmitting = false;
          this.failed = true;
        }
      );
    }
  }
