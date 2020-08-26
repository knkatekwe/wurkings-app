
export class Role {
  id: number;
  name: string;
  description: string;
  type: string;
}

export class User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  date_of_birth?: string;
  gender?: string;
  about?: string;
  physical_address?: string
  occupation: string;
  profile_picture_url: string;
  wallpaper_url: string;
  city?: string;
  state?: string;
  zip?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  role?: Role;
  created_at?: Date;
  updated_at?: Date;
}

export class UserObject{
  jwt: string
  user: User
}

export class Uzer {
  id: number | string;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  type?: string;
  phone_number?: string;
  date_of_birth?: string;
  gender?: string;
  about?: string;
  physical_address?: string;
  occupation?: string;
  profile_picture_url?: string;
  wallpaper_url?: string;
}
