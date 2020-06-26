import { Catergory } from './catergory.model';
import { User } from './user.model';
import { Location } from './location.model';

export class Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  catergory?: Catergory;//
  city?: string;//
  state?: string;//
  owner: any;//
  paymentRate?: string;
  outbound: boolean;
  forAll?: boolean;
  onlyStudent?: boolean;
  onlyEmployed?: boolean;
  isActive: boolean;
  isReserved: boolean;
  created_at: string;
  updated_at: string;
}
