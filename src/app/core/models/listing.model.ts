import { Catergory } from './catergory.model';
import { User } from './user.model';
import { Location } from './location.model';

export class Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  catergory: Catergory;//
  location: Location;//
  user: User;//
  outbound: boolean;
  forAll: boolean;
  onlyStudent: boolean;
  onlyEmployed: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
