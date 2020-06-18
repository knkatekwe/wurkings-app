import { Catergory } from './catergory.model';
import { User } from './user.model';

export class Listing {
  id: string;
  title: string;
  description: string;
  catergory: Catergory;//
  location: Location;//
  user: User;//
  outbound: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
