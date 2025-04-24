export interface IUser {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "admin" | "manager" | "user";
  active: boolean;
  lastLogin?: Date;
  provider?: "local" | "google";
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ILoginResponse {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    active: boolean;
    lastLogin?: Date;
  };
  token: string;
}
