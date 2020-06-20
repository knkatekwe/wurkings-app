export class BookingListConfig{

  type: string;

  filters: {
    status?: string,
    user: string,
    owner?: string,
    is_active?: number
  };

}
