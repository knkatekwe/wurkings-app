import { User } from './user.model';
import { Listing } from './listing.model';
import { Message } from './message.model';
import { PaymentType } from './payment-rate.model';

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
  payment_rate?: PaymentType;//
  createdAt: string;
  updatedAt: string;
  isReserved: boolean;
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
