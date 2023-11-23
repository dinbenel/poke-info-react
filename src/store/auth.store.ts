import { observable, makeObservable, action, runInAction } from 'mobx';
import { AuthApi } from '../api/auth.api';
import {
  IAuthPayload,
  ILoginFormValue,
  IRegisterFormValue,
  IUser,
} from '@/types/auth.type';
import { RootStore } from './root.store';

class AuthStore {
  user: IUser | undefined;
  authApi: AuthApi;
  accessToken: string = '';
  refreshToken: string = '';

  constructor() {
    this.authApi = new AuthApi();
    makeObservable(this, {
      user: observable,
      accessToken: observable,
      refreshToken: observable,
      login: action,
      register: action,
    });
  }

  async login({ email, password }: ILoginFormValue) {
    try {
      const { data } = await this.authApi.login({ email, password });
      this._setPayload(data);
    } catch (error) {
      console.log(error);
    }
  }

  async register({ email, password, userName }: IRegisterFormValue) {
    try {
      const { data } = await this.authApi.register({
        email,
        password,
        userName,
      });
      this._setPayload(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  private _setPayload(data: IAuthPayload) {
    runInAction(() => {
      this.user = data.user;
      this.accessToken = data.tokens.accessToken;
      this.refreshToken = data.tokens.refreshToken;
    });
  }
}

export default AuthStore;
