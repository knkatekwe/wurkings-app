import { Listing } from './listing.model';

export interface PaymentType {
  id: string;
  rate: string;
  is_active?: string;
  createdAt: string;
  updatedAt: string;
}
