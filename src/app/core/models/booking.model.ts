import { User } from './user.model';
import { Listing } from './listing.model';
import { PaymentRate } from './payment-rate.model';

export interface Booking {
  id: string;
  listing: Listing;//
  user: User;//
  payment_rate?: PaymentRate;//
  start_date: string;
  end_date: string;
  totalAmount?: number;
  status?: string;
  created_at: string;
  updated_at: string;
  is_active?: boolean;
}

export class bookingStatus{
  status?: string[] = [
    'accepted',
    'active',
    'cancelled',
    'overdue',
    'pending',
    'completed',
  ]
}
