import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(mail: string, password: string) {
    return this.http.post(`${environment.API_URL}/api/v1/auth/login`, {
      mail,
      password,
    });
  }

  register(name: string, mail: string, password: string) {
    return this.http.post(`${environment.API_URL}/api/v1/auth/register`, {
      name,
      mail,
      password,
    });
  }

  isAvailable(email: string) {
    return this.http.post<{ isAvailable: boolean }>(
      `${environment.API_URL}/api/v1/auth/is-available`,
      { email },
    );
  }
}
