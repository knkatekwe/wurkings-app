// export interface User {
//       id: string;
//       jwt: string; // user token
//       firstName: string;
//       lastName: string;
//       email: string;
//       date_of_birth?: string;
//       phone_number: string;
//       about?: string;
//       physical_address?: string;
//       is_active: string;
//       profile_picture_url?: any;
//       wallpaper_url?: any;
//       is_reported: string;
//       is_blocked: string;
//       password: string;
//       verification_code: string;
//       remember_token?: any;
//       created_at: string;
//       updated_at: string;
//   }


export class Role {
  id: number;
  name: string;
  description: string;
  type: string;
}

export class User {
  id: string;
  username: string;
  lastName: string;
  email: string;
  phone_number: string;
  about?: string;
  physical_address?: string
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: Role;
  created_at: Date;
  updated_at: Date;
}

export class UserObject{
  jwt: string
  user: User
}
