import { Catergory } from 'src/app/core';
import { Location } from 'src/app/core/models/location.model';

export class ListingData {
  id: string;
  title: string;
  description: string;
  pricing: number;
  catergory: Catergory;
  location: Location;
  userId: string;
  forAll: boolean;
  forPositivelyReviewedOnly: boolean;
  forStudentsOnly: boolean;
  forWorkingClassOnly: boolean;
  outbound: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;

  clear(){
    this.id = '';
    this.title = '';
    this.description = '';
    this.catergory.id = '';
    this.location.id = '';
    this.userId = '';
    this.outbound = false;
    this.is_active = false;
    this.created_at = '';
    this.updated_at = '';
  }

}

export class Title{
 title: string;
 category: string;
 location: string;
}

export class Description{
  description: string;
}

export class Images{

}

export class Pricing{
  pricing: number;
}

export class Conditions{
  forAll: boolean;
  forPositivelyReviewedOnly: boolean;
  forStudentsOnly: boolean;
  forWorkingClassOnly: boolean;
}
