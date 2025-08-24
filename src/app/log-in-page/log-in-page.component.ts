import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent {
  username = '';
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/dashbord']); // sau orice altă pagină
      },
      error: (err) => {
        this.error = 'Email sau parolă greșită!';
      }
    });
  }

}
