import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiSubscribeService {
  private apiUrl = 'http://72.60.37.45:6060/subscribe'; // backend endpoint

  constructor(private http: HttpClient) {}

  submitForm(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
