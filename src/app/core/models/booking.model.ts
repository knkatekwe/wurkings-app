import { User } from './user.model';
import { Listing } from './listing.model';
import { PaymentRate } from './payment-rate.model';
import { Message } from './message.model';

export interface Booking {
  id: string;
  start_date: string;
  end_date: string;
  total_amount?: number;
  total_for_rental?: number;
  service_fee?: number;
  status?: string;
  is_active?: boolean;
  listing: Listing;//
  user: User;//
  messages?: Message[];
  payment_rate?: PaymentRate;//
  createdAt: string;
  updatedAt: string;
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
