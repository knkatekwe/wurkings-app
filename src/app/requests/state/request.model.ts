import { User } from 'src/app/core';
import { PaymentType, Listing } from 'src/app/listing/state/listing.model';

export interface Request {
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

export class Message{
  id: string;
  message_body: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}


export function createRequest(params: Partial<Request>) {
  return {

  } as Request;
}
