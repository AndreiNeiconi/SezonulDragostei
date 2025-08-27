import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}
  SubscribeForm(formData: FormData) {
    return this.http.post(`${this.baseUrl}/subscribe`, formData);
  }
}

