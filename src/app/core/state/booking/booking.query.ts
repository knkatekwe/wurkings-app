import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Booking } from './booking.model';
import { BookingStore, BookingState } from './booking.store';

@Injectable({ providedIn: 'root' })
export class BookingQuery extends QueryEntity<BookingState, Booking> {

  constructor(protected store: BookingStore) {
    super(store);
  }

}
