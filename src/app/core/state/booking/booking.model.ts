export interface Booking {
  id: number | string;
  start_date: string;
  end_date: string;
  payment_rate_id: string;
  price: number;
  total: number;
}

export function createBooking(params: Partial<Booking>) {
  return {

  } as Booking;
}
