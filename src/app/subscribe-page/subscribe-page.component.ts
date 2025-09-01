import { Component } from '@angular/core';


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
  age: number | null = null;
  job = '';
  location = '';
  photoUrl = '';
  details = '';

  succes = '';
  error = '';


  onFileSelected(event: any) {
    alert(
      'Please paste the photo URL manually in the code or use Firebase Storage later.'
    );
  }

  submitForm() {
    if (!this.name || !this.surname || !this.email) {
      this.error = 'Toate campurile obligatorii trebuie completate!';
      return;
    }

  }

}
