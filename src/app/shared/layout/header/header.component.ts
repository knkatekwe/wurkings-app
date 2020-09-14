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

  collapsed = true;

	constructor(private userService: UserService, private route: Router) {}

	currentUser$: Observable<User>;

	ngOnInit() {
		this.currentUser$ = this.userService.currentUser;
	}

	logout() {
		this.userService.purgeAuth();
		this.userService.logout().subscribe((res) => console.log(res));
		this.route.navigateByUrl('/');
	}
}
