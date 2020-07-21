
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
  dob?: string;
  about?: string;
  physical_address?: string
  governmentIssuedId?: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
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
