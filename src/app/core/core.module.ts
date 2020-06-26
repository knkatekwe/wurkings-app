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

  ],
  declarations: []
})
export class CoreModule { }
