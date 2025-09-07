import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';


@Component({
  selector: 'app-member-form',
  templateUrl: './subscribe-page.component.html',
  styleUrls: ['./subscribe-page.component.scss'],
})
export class SubscribePageComponent {
  name = '';
  email = '';
  message = '';
  resposneMessage: string | null = null;

  constructor(private apiService:ApiService){}

  onSubmit() {
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
    };
    this.apiService.submitForm(formData).subscribe({
      next: () => {
        this.resposneMessage = "Form sumited succesfuly!";
        this.name = '';
        this.email = '';
        this.message = '';
        
      },
      error: () => {
        this.resposneMessage = "Error sumiting form!";
      }
    })
  }

}



  // name = '';
  // surname = '';
  // email = '';
  // phone = '';
  // sex = '';
  // age: number | null = null;
  // job = '';
  // location = '';
  // photoUrl = '';
  // details = '';

  // succes = '';
  // error = '';


  // onFileSelected(event: any) {
  //   alert(
  //     'Please paste the photo URL manually in the code or use Firebase Storage later.'
  //   );
  // }

  // submitForm() {
  //   if (!this.name || !this.surname || !this.email) {
  //     this.error = 'Toate campurile obligatorii trebuie completate!';
  //     return;
  //   }

  // }


