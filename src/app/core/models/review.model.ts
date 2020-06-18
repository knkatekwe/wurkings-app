import { Booking } from './booking.model';

export interface Review {
  id: string;
  userId: string;
  booking: Booking;//
  review_body: string;
  stars: string;
  created_at: string;
  updated_at: string;
}
