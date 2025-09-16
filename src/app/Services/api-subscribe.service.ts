import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiSubscribeService {
  // ✅ use domain with HTTPS
  private apiUrl = 'https://serviciidematrimoniale.ro/api/subscribe';


  constructor(private http: HttpClient) {}

  submitForm(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
