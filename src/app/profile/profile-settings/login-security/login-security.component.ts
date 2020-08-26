import { Component, OnInit } from '@angular/core';
import { Uzer, UserService } from 'src/app/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-security',
  templateUrl: './login-security.component.html',
})
export class LoginSecurityComponent implements OnInit {

  user?: Uzer;
  //userInfo: UzerInfo;
  form: FormGroup;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initializeForm()
    //Retreive the prefetched user
		this.route.data.subscribe((data: { user: Uzer }) => {
      this.user = data.user;
      console.log(this.user)
    });
  }

  save(){
    console.log('...save method from personal information component...')
    console.log(this.form.value)
    if(this.f.password.value === this.f.password_confirmation.value){
      this.userService.changePassword(this.user.id, this.form.value)
     .subscribe(user => {console.log('password changed successfully successfully')
                            console.log(user)},
                error => {console.log(error)})
    }else{
      console.log('Make sure your passwords are the same')
    }
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      _method: ['PATCH']
    });
  }

  get f(){
    return this.form.controls
  }

}
