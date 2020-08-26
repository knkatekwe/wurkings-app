import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core';

// import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'register.component.html' })

export class RegisterComponent implements OnInit {

    form: FormGroup;
    loading = false;
    submitted = false;
    isSubmitting = false;
    errors: Error;
    passwordSimilar: boolean;

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
            email: ['', Validators.required],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            phone_number: ['', Validators.required],
            date_of_birth: ['', Validators.required],
            gender: [ 1 , Validators.required],
            physical_address: ['', Validators.required],
            occupation: ['', Validators.required],
            about: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            is_active: [true],
            password_confirmation: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
      //this.isSubmitting = true;
      //this.errors = {errors: {}};
      if(this.f.password.value === this.f.password_confirmation.value){
        this.userService.register(this.form.value)
          .subscribe(data => {this.router.navigateByUrl('/login')},
                     err => {
                       console.log(err)
                       this.errors = err;
                       this.isSubmitting = false;
          }
        );
      }else{
        this.passwordSimilar = true;
      }

    }

    gender: {name: string, value: number}[]=[
      {
        "name": "Female",
        "value": 1
      },
      {
        "name": "Male",
        "value": 0
      }
    ]


}
