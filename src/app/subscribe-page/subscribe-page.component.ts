import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-subscribe-page',
  templateUrl: './subscribe-page.component.html',
  styleUrls: ['./subscribe-page.component.scss'],
})
export class SubscribePageComponent {
  name = '';
  surname = '';
  email = '';
  phone = '';
  sex = '';
  age = '';
  job = '';
  avalabilityDate = '';
  location = '';
  photo = '';
  moreDetali = '';
  succes = '';
  selectedFile ='';
  error = '';
  constructor(private SubscribeService: SubscribeService) {}

  submitForm() {
    const formData = new FormData();

    formData.append('last_name', this.name);
    formData.append('first_name', this.surname);
    formData.append('email', this.email);
    formData.append('phone', this.phone);
    formData.append('gender', this.sex);
    formData.append('age', this.age);
    formData.append('occupation', this.job);
    formData.append('available_from', this.avalabilityDate);
    formData.append('available_to', this.avalabilityDate); // if you want both same
    formData.append('location', this.location);
    formData.append('about', this.moreDetali);
    formData.append('accepted_terms', 'true');
    formData.append('photo', this.selectedFile); // handled separately

    this.SubscribeService.SubscribeForm(formData).subscribe({
      next: (res) => {
        this.succes = 'Message sent!';
        this.error = '';
      },
      error: () => {
        this.error = 'Failed to send message.';
        this.succes = '';
      },
    });
  }

  // Capture file input
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}

