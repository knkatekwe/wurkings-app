import { Component, OnInit } from '@angular/core';

import { User, UserService, UserObject } from '../../../core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;

  constructor(
    private userService: UserService,
    private route: Router
  ) {}

  currentUser: User;

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData) => {
        this.currentUser = userData;
      }
    );
    //console.log(this.currentUser)
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    console.log('button was clicked')
  }

  logout(){
    this.userService.purgeAuth();
    this.route.navigateByUrl('/')
  }

}
