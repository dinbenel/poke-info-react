import { observable, makeObservable, action } from 'mobx';
import { AuthApi } from '../api/auth.api';

class AuthStore {
  auth: any;
  authApi: AuthApi;

  constructor() {
    this.authApi = new AuthApi();
    makeObservable(this, {
      auth: observable,
      setAuth: action,
    });
  }
  setAuth(auth: any) {
    // auth.projects = auth.projects.sort((a: any, b: any) =>
    //   sortByParam(a, b, 'name')
    // );
    this.auth = auth;
  }
  async login() {
    try {
      const { data } = await this.authApi.login();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default AuthStore;
