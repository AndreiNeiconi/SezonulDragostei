import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:3000/api';
  private isLogin = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    this.isLogin = true
    return this.http.post<{ token: string }>(`${this.baseUrl}/login`, { email, password });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn():boolean {
    return this.isLogin
  }

  logout() {
    this.isLogin = false
    localStorage.removeItem('token');
  }
}
