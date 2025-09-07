import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { ApiSubscribeService } from '../Services/api-subscribe.service';


@Component({
  selector: 'app-member-form',
  templateUrl: './subscribe-page.component.html',
  styleUrls: ['./subscribe-page.component.scss'],
})
export class SubscribePageComponent {

  name = '';
  surname = '';
  email = '';
  phone = '';
  sex = '';
  age!: number;
  job = '';
  location = '';
  details = '';
  file: File | null = null;

  succes: string | null = null;
  error: string | null = null;

  constructor(private apiService: ApiSubscribeService) {}

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  submitForm() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('surname', this.surname);
    formData.append('email', this.email);
    formData.append('phone', this.phone);
    formData.append('sex', this.sex);
    formData.append('age', this.age.toString());
    formData.append('job', this.job);
    formData.append('location', this.location);
    formData.append('details', this.details);
    if (this.file) {
      formData.append('file', this.file, this.file.name);
    }

    this.apiService.submitForm(formData).subscribe({
      next: (res) => {
        this.succes = 'Form submitted successfully!';
        this.error = null;
        this.resetForm();
      },
      error: (err) => {
        this.error = 'Error submitting form!';
        this.succes = null;
        console.error(err);
      },
    });
  }

  resetForm() {
    this.name = '';
    this.surname = '';
    this.email = '';
    this.phone = '';
    this.sex = '';
    this.age = 0;
    this.job = '';
    this.location = '';
    this.details = '';
    this.file = null;
  }
}
