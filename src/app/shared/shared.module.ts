import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ListingListComponent, ListingMetaComponent, ListingPreviewComponent, ListingDetailComponent } from './listing-helpers';
import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewPreviewComponent } from './review-helpers/review-preview/review-preview.component';
import { ReviewListComponent } from './review-helpers/review-list/review-list.component';
import { NotificationListComponent } from './notification-helpers/notification-list/notification-list.component';
import { NotificationPreviewComponent } from './notification-helpers/notification-preview/notification-preview.component';
import { ChatPreviewComponent } from './chat-helpers/chat-preview/chat-preview.component';
import { ChatListComponent } from './chat-helpers/chat-list/chat-list.component';
import { ChatMessagesComponent } from './chat-helpers/chat-messages/chat-messages.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { CheckoutProductComponent } from './checkout-helpers/checkout-product/checkout-product.component';
import { CheckoutFailureComponent } from './checkout-helpers/checkout-failure/checkout-failure.component';
import { CheckoutSuccessfulComponent } from './checkout-helpers/checkout-successful/checkout-successful.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
  ],
  declarations: [
    ListingListComponent,
    ListingMetaComponent,
    ListingPreviewComponent,
    FavoriteButtonComponent,
    FollowButtonComponent,
    ListErrorsComponent,
    ShowAuthedDirective,
    ReviewPreviewComponent,
    ReviewListComponent,
    NotificationListComponent,
    NotificationPreviewComponent,
    ChatPreviewComponent,
    ChatListComponent,
    ChatMessagesComponent,
    ListingDetailComponent,
    ImageUploadComponent,
    CheckoutProductComponent,
    CheckoutFailureComponent,
    CheckoutSuccessfulComponent
  ],
  exports: [
    ListingListComponent,
    ListingMetaComponent,
    ListingPreviewComponent,
    CommonModule,
    FavoriteButtonComponent,
    FollowButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    ListErrorsComponent,
    RouterModule,
    ShowAuthedDirective,
    ReviewListComponent,
    ReviewPreviewComponent,
    NotificationListComponent,
    NotificationPreviewComponent,
    ChatListComponent,
    ChatMessagesComponent,
    ChatPreviewComponent,
    ListingDetailComponent,
    ImageUploadComponent,
    CheckoutProductComponent,
    CheckoutFailureComponent,
    CheckoutSuccessfulComponent

  ]
})
export class SharedModule {}
