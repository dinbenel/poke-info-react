import AuthStore from './auth.store';

export class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }
}

export const rootStore = new RootStore();
