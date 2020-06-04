export interface User {
      id: string;
      token: string; // user token
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      date_of_birth: string;
      phone_number: string;
      about: string;
      physical_address: string;
      is_active: string;
      profile_picture_url?: any;
      wallpaper_url?: any;
      is_reported: string;
      is_blocked: string;
      password: string;
      verification_code: string;
      remember_token?: any;
      created_at: string;
      updated_at: string;
  }

  // export interface RootObject {
  //     users: User[];
  //     listings: Listing[];
  //     listing_images: ListingImage[];
  //     payment_rates: PaymentRate[];
  //     catergories: Catergory[];
  //     user_documents: UserDocument[];
  //     bookings: Booking[];
  //     overdue_bookings: OverdueBooking[];
  //     reviews: Review[];
  //     password_resets: PasswordReset[];
  // }
