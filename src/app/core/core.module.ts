import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';
import { CookieService } from 'ngx-cookie-service'

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
import { CatergoryService } from './services/catergory.service';

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
    CatergoryService,
    CookieService,

  ],
  declarations: []
})
export class CoreModule { }
