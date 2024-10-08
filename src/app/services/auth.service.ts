import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(mail: string, password: string) {
    return `${environment.API_URL}/api/v1/auth/login`;
  }
}
