import type { IStoreUser } from "./store-user.interface";

export interface IUserState {
  user: IStoreUser | null;
  theme: string;
}
