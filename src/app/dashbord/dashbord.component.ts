import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent   {
  //on init func

  activeMenu: string = 'dashboard';

  requests = [
    { id: 1, user: 'Alice', text: 'Request send' },
    { id: 2, user: 'Bob', text: 'Request send' },
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




}
