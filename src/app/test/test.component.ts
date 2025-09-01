import { Component, OnInit } from '@angular/core';
 import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-root',
  template: `<p>Current DB Time: {{ time }}</p>`,
})
export class AppComponent implements OnInit {
  time: string = '';

  constructor(private dbService: AuthService) {}

  ngOnInit() {
    this.dbService.getTime().subscribe((data) => {
      this.time = data.time;
    });
  }
}
