import { Booking } from './booking.model';

export interface OverdueBooking {
  id?: any;
  booking?: Booking;
  start_date?: any;
  end_date?: any;
  created_at?: any;
  updated_at?: any;
}
