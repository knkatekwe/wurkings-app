import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Profile } from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfilesService {
  constructor (
    private apiService: ApiService
  ) {}

  getProfile(userId: number | string): Observable<Profile> {
    return this.apiService.get(`/userdetails/${userId}`)
      .pipe(map((data: {profile: Profile}) => data.profile));
  }

  getUserReviews(userId: number | string): Observable<Profile> {
    return this.apiService.post(`/profiles/${userId}/follow`);
  }

  follow(userId: number | string): Observable<Profile> {
    return this.apiService.post(`/profiles/${userId}/follow`);
  }

  unfollow(userId: number | string): Observable<Profile> {
    return this.apiService.delete(`/profiles/${userId}/follow`);
  }

}
