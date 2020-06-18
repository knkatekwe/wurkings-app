import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/core';

// import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    isSubmitting = false;
    errors: Error;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        // private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            last_name: ['', Validators.required],
            email: ['', Validators.required],
            phone_number: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
      //this.isSubmitting = true;
      //this.errors = {errors: {}};

      const registrationData = this.form.value;
      console.log(registrationData)
      this.userService
      .register(registrationData)
      .subscribe(
        data => this.router.navigateByUrl('/login'),
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );
    }


}
