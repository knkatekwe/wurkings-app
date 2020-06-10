import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent } from './listing-helpers';
import { FavoriteButtonComponent, FollowButtonComponent } from './buttons';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';
import {NglModule} from 'ng-lightning';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewPreviewComponent } from './review-helpers/review-preview/review-preview.component';
import { ReviewListComponent } from './review-helpers/review-list/review-list.component';
import { NotificationListComponent } from './notification-helpers/notification-list/notification-list.component';
import { NotificationPreviewComponent } from './notification-helpers/notification-preview/notification-preview.component';
import { ChatPreviewComponent } from './chat-helpers/chat-preview/chat-preview.component';
import { ChatListComponent } from './chat-helpers/chat-list/chat-list.component';
import { ChatMessagesComponent } from './chat-helpers/chat-messages/chat-messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
    NglModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
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
    ChatMessagesComponent
  ],
  exports: [
    ArticleListComponent,
    ArticleMetaComponent,
    ArticlePreviewComponent,
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
    ChatPreviewComponent

  ]
})
export class SharedModule {}
