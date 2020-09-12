export interface ListingImage {
  id: number | string;
  image_url: string | File;
  listing_id: number | string
  alt: string;
}

export function createListingImage(params: Partial<ListingImage>) {
  return {

  } as ListingImage;
}
