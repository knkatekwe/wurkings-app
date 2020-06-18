import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-listing-page',
	templateUrl: './listing.component.html'
})
export class ListingComponent implements OnInit {
	// listing: Article;
	// currentUser: User;
	canModify: boolean;
	comments: Comment[];
	commentControl = new FormControl();
	commentFormErrors = {};
	isSubmitting = false;
	isDeleting = false;

	constructor(
		private route: ActivatedRoute,
		// private listingsService: ArticlesService,
		// private commentsService: CommentsService,
		private router: Router,
		// private userService: UserService
	) {}

	ngOnInit() {
		// Retreive the prefetched listing
		// this.route.data.subscribe((data: { listing: Article }) => {
		// 	this.listing = data.listing;

		// 	// Load the comments on this listing
		// 	this.populateComments();
		// });

		// Load the current user's data
		// this.userService.currentUser.subscribe((userData: User) => {
		// 	this.currentUser = userData;

		// 	this.canModify = this.currentUser.username === this.listing.author.username;
		// });
	}

	// onToggleFavorite(favorited: boolean) {
	// 	this.listing.favorited = favorited;

	// 	if (favorited) {
	// 		this.listing.favoritesCount++;
	// 	} else {
	// 		this.listing.favoritesCount--;
	// 	}
	// }

	// onToggleFollowing(following: boolean) {
	// 	this.listing.author.following = following;
	// }

	// deleteArticle() {
	// 	this.isDeleting = true;

	// 	this.listingsService.destroy(this.listing.slug).subscribe((success) => {
	// 		this.router.navigateByUrl('/');
	// 	});
	// }

	// populateComments() {
	// 	this.commentsService.getAll(this.listing.slug).subscribe((comments) => (this.comments = comments));
	// }

	// addComment() {
	// 	this.isSubmitting = true;
	// 	this.commentFormErrors = {};

	// 	const commentBody = this.commentControl.value;
	// 	this.commentsService.add(this.listing.slug, commentBody).subscribe(
	// 		(comment) => {
	// 			this.comments.unshift(comment);
	// 			this.commentControl.reset('');
	// 			this.isSubmitting = false;
	// 		},
	// 		(errors) => {
	// 			this.isSubmitting = false;
	// 			this.commentFormErrors = errors;
	// 		}
	// 	);
	// }

	// onDeleteComment(comment) {
	// 	this.commentsService.destroy(comment.id, this.listing.slug).subscribe((success) => {
	// 		this.comments = this.comments.filter((item) => item !== comment);
	// 	});
	// }
}
