import { Component, OnInit } from '@angular/core';

declare const firebase: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SezonulDragostei';
  ngOnInit(): void {
    const db = firebase.firestore();

    // Example: Add data
    db.collection('users')
      .add({
        name: 'John Doe',
        email: 'john@example.com',
      })
      .then(() => {
        console.log('Data added successfully');
      });
  }
}
