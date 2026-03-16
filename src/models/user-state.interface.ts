import type { IUser } from "./user.interface";

export interface IUserState {
  user: IUser | null;
  theme: string;
}
