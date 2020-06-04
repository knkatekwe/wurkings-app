export class ListingData {
  id: string = "";
  title: string = "";
  description: string = "";
  pricing: number = 0;
  catergoryId: string = "";
  locationId: string = "";
  userId: string = "";
  isGovernmentIssuedIdRequired: boolean = false;
  isPositivelyReviewed: boolean = false;
  isStudent: boolean = false;
  isWorkingClass: boolean = false;
  outbound: boolean = false;
  is_active: boolean = false;
  created_at: string = "";
  updated_at: string = "";

  clear(){
    this.id = '';
    this.title = '';
    this.description = '';
    this.catergoryId = '';
    this.locationId = '';
    this.userId = '';
    this.outbound = false;
    this.is_active = false;
    this.created_at = '';
    this.updated_at = '';
  }

}

export class Title{
 title: string;
 categoryId: string;
 locationId: string;
}

export class Description{
  description: string;
}

export class Images{

}

export class Pricing{
  price: number;
}

export class Rules{
  isGovernmentIssuedIdRequired: boolean;
  isPositivelyReviewed: boolean;
  isStudent: boolean;
  isWorkingClass: boolean;
}
