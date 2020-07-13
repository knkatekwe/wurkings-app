export interface Payment {
  id: string;
  intent: string;
  status: string;
  payer: Payer;
  purchase_units: PurchaseUnit[];
  create_time: Date;
  update_time: Date;
}

export interface Address {
  country_code: string;
}

export interface Name {
  given_name: string;
  surname: string;
}

export interface Payer {
  email_address: string;
  payer_id: string;
  address: Address;
  name: Name;
}

export interface Amount {
  value: string;
  currency_code: string;
}

export interface Payee {
  email_address: string;
  merchant_id: string;
}

export interface Name2 {
  full_name: string;
}

export interface Address2 {
  address_line_1: string;
  admin_area_2: string;
  country_code: string;
}

export interface Shipping {
  name: Name2;
  address: Address2;
}

export interface Amount2 {
  value: string;
  currency_code: string;
}

export interface SellerProtection {
  status: string;
  dispute_categories: string[];
}

export interface Link {
  href: string;
  rel: string;
  method: string;
  title: string;
}

export interface Capture {
  status: string;
  id: string;
  final_capture: boolean;
  create_time: Date;
  update_time: Date;
  amount: Amount2;
  seller_protection: SellerProtection;
  links: Link[];
}

export interface Payments {
  captures: Capture[];
}

export interface PurchaseUnit {
  description: string;
  reference_id: string;
  soft_descriptor: string;
  amount: Amount;
  payee: Payee;
  shipping: Shipping;
  payments: Payments;
}
