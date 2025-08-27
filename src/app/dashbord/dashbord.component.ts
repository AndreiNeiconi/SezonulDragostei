import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent {
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
}
