import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import {
  ApiService,
  ListingsService,
  AuthGuard,
  JwtService,
  ProfilesService,
  TagsService,
  UserService,
  BookingService,
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    ListingsService,
    AuthGuard,
    JwtService,
    ProfilesService,
    TagsService,
    UserService,
    BookingService,

  ],
  declarations: []
})
export class CoreModule { }
