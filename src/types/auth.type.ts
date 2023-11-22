export interface IUser {}

export interface ILoginFormValue {
  email: string;
  password: string;
}

export interface IRegisterFormValue extends ILoginFormValue {
  userName: string;
}
