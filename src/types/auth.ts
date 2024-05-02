export interface SchemaUser {
  password?: string;
  age?: number;
  email?: string;
  phoneNumber?: string;
  userName?: string;
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
  active?: boolean;
  verificationCode?: string;
  avatar?: string;

  passportNumber?: "";
  country?: "";
  nationality?: "";
  gender?: "";
}