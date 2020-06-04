export class ListingData {
  id: string = "";
  title: string = "";
  description: string = "";
  pricing: number = 0;
  catergoryId: string = "";
  locationId: string = "";
  userId: string = "";
  forAll: boolean = false;
  forPositivelyReviewedOnly: boolean = false;
  forStudentsOnly: boolean = false;
  forWorkingClassOnly: boolean = false;
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
  pricing: number;
}

export class Conditions{
  forAll: boolean;
  forPositivelyReviewedOnly: boolean;
  forStudentsOnly: boolean;
  forWorkingClassOnly: boolean;
}
