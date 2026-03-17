import type { IUser } from "./user.interface";

export interface ILoginUserResponse {
  jwt: string;
  user: IUser;
}
