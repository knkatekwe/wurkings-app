import { Category } from 'src/app/admin/state/category/category.model';
import { ListingImage } from 'src/app/core';
import { PaymentRate } from 'src/app/core/state/payment-rate/payment-rate.model';

export interface Listing {
  id: number | string;
  user_id: number | string
  title: string;
  description: string;
  category_id: Category
  listing_images: ListingImage[]
  payment_rates: PaymentRate[]
}

export function createListing(params: Partial<Listing>) {
  return {

  } as Listing;
}
