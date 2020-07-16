import { Component, OnInit } from '@angular/core';

import { User, UserService, UserObject } from '../../../core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  navbarOpen = false;
  public isMenuCollapsed = true;

  constructor(
    private userService: UserService,
    private route: Router
  ) {}

  currentUser$: Observable<User>;

  ngOnInit() {
    this.currentUser$ = this.userService.currentUser
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
