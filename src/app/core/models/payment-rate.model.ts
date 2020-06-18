import { Listing } from './listing.model';

export interface PaymentRate {
  id: string;
  listing: Listing;//
  title: string;
  price: string;
  is_active: string;
  created_at: string;
  updated_at: string;
}
