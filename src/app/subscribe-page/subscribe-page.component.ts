import { Component } from '@angular/core';
import { MemberService, Member } from '../Services/subscribe.service';

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

  constructor(private memberService: MemberService) {}

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

    const member: Member = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      phone: this.phone,
      sex: this.sex,
      age: this.age || 0,
      job: this.job,
      location: this.location,
      photoUrl: this.photoUrl || 'https://via.placeholder.com/150',
      details: this.details,
      createdAt: new Date(),
    };

    this.memberService
      .addMember(member)
      .then(() => {
        this.succes = 'Datele au fost trimise cu succes!';
        this.error = '';
        this.resetForm();
      })
      .catch((err) => {
        this.error = 'Eroare la salvare: ' + err.message;
        this.succes = '';
      });
  }

  resetForm() {
    this.name = '';
    this.surname = '';
    this.email = '';
    this.phone = '';
    this.sex = '';
    this.age = null;
    this.job = '';
    this.location = '';
    this.photoUrl = '';
    this.details = '';
  }
}
