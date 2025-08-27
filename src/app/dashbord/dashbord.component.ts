import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/change-text-content.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent implements OnInit {
  //on init func

  activeMenu: string = 'dashboard';

  requests = [
    { id: 1, user: 'Alice', text: 'Update profile' },
    { id: 2, user: 'Bob', text: 'Password reset' },
  ];

  settings = {
    siteName: 'My Website',
    adminEmail: 'admin@example.com',
  };

  setMenu(menu: string) {
    this.activeMenu = menu;
  }

  saveSettings() {
    console.log('Settings saved:', this.settings);
    alert('Settings saved!');
  }

  //Change the content in manage text
  newText: string = '';
  currentvalue: string = '';

  constructor(private dataService: DataService) {}

  updateText() {
    this.dataService.changeText(this.newText);
  }
  ngOnInit() {
    this.dataService.currentText.subscribe((text) => {
      this.currentvalue = text;
    });
  }
}
