import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, ListingListConfig } from '../core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    // private tagsService: TagsService,
    private userService: UserService
  ) {}

  // opened = false;
  // prompt = 'error';
  // isAuthenticated: boolean;
  // currentUser;
  // listConfig: ListingListConfig = {
  //   type: 'all',
  //   filters: {
  //     outbound: false,
  //     isReserved: false
  //   }
  // };
  // tags: Array<string> = [];
  // tagsLoaded = false;

  ngOnInit() {
    // this.userService.isAuthenticated.subscribe(
    //   (authenticated) => {
    //     this.isAuthenticated = authenticated;
    //     console.log(this.isAuthenticated)
    //   }
    // );
    // this.currentUser = this.userService.getCurrentUser()
    //console.log(this.currentUser)
  }

  // open() {
  //   this.opened = !this.opened;
  // }

  // cancel() {
  //   this.opened = false;
  // }

  setListTo(type: string = '', filters: Object = {}) {
    // If feed is requested but user is not authenticated, redirect to login
    // if (type === 'feed' && !this.isAuthenticated) {
    //   this.router.navigateByUrl('/login');
    //   return;
    // }

    // Otherwise, set the list object
    //this.listConfig = {type: type, filters: filters};
  }

}
