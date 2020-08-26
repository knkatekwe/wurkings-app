export interface Listing {
  id: number | string;
  title: string;
  description: string;
  image?: string;
  price: number;
  catergory?: Catergory;//
  city?: string;//
  state?: string;//
  owner: any;//
  payment_type?: PaymentType;
  outbound: boolean;
  allCan?: boolean;
  onlyStudent?: boolean;
  onlyWorking?: boolean;
  isActive: boolean;
  isReserved: boolean;
  created_at: string;
  updated_at: string;
}

export class Catergory {
  id: string;
  catergoryName: string;
  isActive: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentType {
  id: string;
  rate: string;
  is_active?: string;
  createdAt: string;
  updatedAt: string;
}

export function createListing(params: Partial<Listing>) {
  return {

  } as Listing;
}
