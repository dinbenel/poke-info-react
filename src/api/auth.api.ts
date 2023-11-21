import { httpClient } from '@/lib/http.client';

export class AuthApi {
  constructor() {}

  async login() {
    return httpClient.client.post('');
  }

  async logout() {
    return httpClient.client.post('');
  }

  async register() {
    return httpClient.client.post('');
  }
}
