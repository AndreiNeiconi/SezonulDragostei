import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  // fullName: string = '';
  // email: string = '';
  // message: string = '';
  // subject: string = '';

  // submitForm() {
  //   alert("Mesajul tau a fost trimis cu succes! Iti multumim!");
  // } 
    name = '';
    email = '';
    subject = '';
    message = '';
    resposneMessage: string | null = null;
  
    constructor(private apiService:ApiService){}
  
    onSubmit() {
      const formData = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };
      this.apiService.submitForm(formData).subscribe({
        next: () => {
          this.resposneMessage = "Form sumited succesfuly!";
          this.name = '';
          this.email = '';
          this.subject = '';
          this.message = '';
          
        },
        error: () => {
          this.resposneMessage = "Error sumiting form!";
        }
      })
    }
}
