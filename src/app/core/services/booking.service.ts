import { Injectable } from '@angular/core';
import { ApiService, API_ENDPOINT } from './api.service';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Booking, BookingListConfig } from '..';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

constructor(private apiService: ApiService,
            private http: HttpClient) { }

query(config: BookingListConfig): Observable<any> {
  // Convert any filters over to Angular's URLSearchParams
  const params = {};

  Object.keys(config.filters)
  .forEach((key) => {
    params[key] = config.filters[key];
  });

  return this.apiService
  .get(
    '/bookings' + ((config.type === 'feed') ? '/feed' : ''),
    new HttpParams({ fromObject: params })
  );
}

queryMyBookings(userId: string): Observable<any>{
  const param1 = new HttpParams().set('user_id', userId)
  return this.http.get(API_ENDPOINT + '/bookings', {params: param1})
}

queryBookings(userId: string): Observable<any>{
  const param1 = new HttpParams().set('listing.owner.id', userId)
  return this.http.get(API_ENDPOINT + '/bookings', {params: param1})
}

get(id): Observable<Booking> {
  return this.apiService.get('/bookings/' + id)
    .pipe(map(data => data));
}

destroy(id) {
  return this.apiService.delete('/bookings/' + id);
}

save(booking): Observable<Booking> {
  // If we're updating an existing booking
  if (booking.id) {
    return this.apiService.put('/bookings/' + booking.id, booking)
      .pipe(map(data => booking));

  // Otherwise, create a new booking
  } else {
    return this.apiService.post('/bookings/', booking)
      .pipe(map(data => booking));
  }
}

sendMessage(id: string, message: string): Observable<any> {
  // Send message for a specified booking
    return this.apiService.post('/bookings/' + id + '/messages', message)
      .pipe(map(data => message));
}

updateBooking(id: string, status): Observable<Booking> {
  // Send message for a specified booking
    return this.apiService.put('/bookings/' + id, status)
      .pipe(map(data => status));
}

getMessages(id: string): Observable<any>{
  const param = new HttpParams().set('booking.id', id)
  return this.http.get(API_ENDPOINT + '/messages', {params: param})
}

favorite(id): Observable<Booking> {
  return this.apiService.post('/bookings/' + id + '/favorite');
}

unfavorite(id): Observable<Booking> {
  return this.apiService.delete('/bookings/' + id + '/favorite');
}

}
