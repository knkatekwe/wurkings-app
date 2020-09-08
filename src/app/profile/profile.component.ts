import { Component, OnInit } from '@angular/core';
import { UserService, UserObject, User } from '../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  user: any;
  canModify: boolean;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(){

    // Retreive the prefetched article
		this.route.data.subscribe((data: { user: User }) => {
      this.user = data.user;
      //console.log(this.user)

			// Load the comments on this article
			//this.populateComments();
		});

		// Load the current user's data
		this.userService.currentUser.subscribe((userData: User) => {
			this.currentUser = userData;
      this.canModify = this.user.id === this.currentUser.id;
    });

  }

  navigate(){
    this.router.navigateByUrl('profile/settings/personal-info')
  }

}
