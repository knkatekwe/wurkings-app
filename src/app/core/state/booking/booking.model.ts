export interface Booking {
  id: number | string;
  user_id: number | string
  start_date: string;
  listing_id: number | string;
  status: string;
  period: number;
  end_date: string;
  payment_rate_id: string;
  price: number;
  total: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export function createBooking(params: Partial<Booking>) {
  return {

  } as Booking;
}
