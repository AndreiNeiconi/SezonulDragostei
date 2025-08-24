import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  SubscribeForm(formData: { name: String; surname: String; email: String; phone: String; sex: String; age: String; job: String; avalabilityDate: String; location: String; photo: String; moreDetali: String; }) {
    return this.http.post(`${this.baseUrl}/subscribe`, formData);
  };
}
