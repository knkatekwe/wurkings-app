import { Catergory } from './catergory.model';
import { User } from './user.model';
import { Location } from './location.model';
import { PaymentType } from '.';

export class Listing {
  id: string;
  title: string = '';
  description: string;
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
