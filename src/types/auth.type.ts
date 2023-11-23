export interface IUser {}

export interface ILoginFormValue {
  email: string;
  password: string;
}

export interface IRegisterFormValue extends ILoginFormValue {
  userName: string;
}

export interface IUser {
  _id: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  email: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ITokensPayload {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthPayload {
  user: IUser;
  tokens: ITokensPayload;
}
