import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Booking } from './booking.model';

export interface BookingState extends EntityState<Booking> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'booking' })
export class BookingStore extends EntityStore<BookingState, Booking> {

  constructor() {
    super();
  }

}
