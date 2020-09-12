export interface PaymentRate {
  id: number | string;
  title: string;
  price: number;
  listing_id: number | string
}

export function createPaymentRate(params: Partial<PaymentRate>) {
  return {

  } as PaymentRate;
}
