import type { IUser } from "./user.interface";

export interface IStoreUser extends IUser {
  token: string;
}
