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
  sex = ''
  age = '';
  job = '';
  avalabilityDate = '';
  location = '';
  photo = '';
  moreDetali = '';
  succes = ''
  error = ''
  constructor(private SubscribeService:SubscribeService){}


  submitForm() {
    const formData = { name: this.name,surname: this.surname,email: this.email,phone:this.phone,sex:this.sex,age:this.age,job:this.job,avalabilityDate:this.avalabilityDate,location:this.location,photo:this.photo,moreDetali:this.moreDetali };
    this.SubscribeService.SubscribeForm(formData).subscribe({
      next: (res) => {
        this.succes = 'Message sent!';
        this.error = '';
        this.name = this.surname= this.email = this.phone= this.sex= this.age=this.job=this.avalabilityDate=this.location=this.photo=this.moreDetali='';
      },
      error: () => {
        this.error = 'Failed to send message.';
        this.succes = '';
      }
    });
  }
}

