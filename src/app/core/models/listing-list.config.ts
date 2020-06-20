export class ListingListConfig{

  type: string;

  filters: {
    title?: string,
    description?: string,
    owner?: string,
    outbound?: boolean,
    favorited?: boolean,
    is_active?: boolean
  };

}
