import { Component, OnInit } from '@angular/core';
import { UserService, UserObject, User, Profile } from '../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {
	currentUser: User;
	user: Profile;
	canModify: boolean;

	constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.data.subscribe((data: { user: Profile }) => {
      this.user = data.user;
      //console.log(data.user)
		});
		// Load the current user's data
		this.userService.getUser().subscribe((res) => {
			this.currentUser = res;
    });
    //this.canModify = this.user.username === this.currentUser.username;
	}

	navigate() {
		this.router.navigateByUrl('profile/settings/personal-info');
	}
}
