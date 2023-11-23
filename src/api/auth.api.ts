import { httpClient } from '@/lib/http.client';
import {
  IAuthPayload,
  ILoginFormValue,
  IRegisterFormValue,
} from '@/types/auth.type';

export class AuthApi {
  logout() {
    return httpClient.client.post('');
  }

  login({ email, password }: ILoginFormValue) {
    return httpClient.client.post<IAuthPayload>('auth/login', {
      username: email,
      password,
    });
  }

  register({ email, password, userName }: IRegisterFormValue) {
    return httpClient.client.post<IAuthPayload>('auth/register', {
      email,
      password,
      userName,
    });
  }
}
